import { BeanStub } from "../context/beanStub";
import { Column } from "../entities/column";
import { RowNode } from "../entities/rowNode";
import { Autowired, Bean, PostConstruct } from "../context/context";
import { ChangedPath } from "../utils/changedPath";
import { IRowModel } from "../interfaces/iRowModel";
import { RowRenderer } from "../rendering/rowRenderer";
import { CellValueChangedEvent, Events } from "../events";
import { IClientSideRowModel } from "../interfaces/iClientSideRowModel";

// Matches value in clipboard module
const SOURCE_PASTE = 'paste';
@Bean('changeDetectionService')
export class ChangeDetectionService extends BeanStub {

    @Autowired('rowModel') private rowModel: IRowModel;
    @Autowired('rowRenderer') private rowRenderer: RowRenderer;

    private clientSideRowModel: IClientSideRowModel;

    @PostConstruct
    private init(): void {
        if (this.rowModel.getType() === 'clientSide') {
            this.clientSideRowModel = this.rowModel as IClientSideRowModel;
        }

        this.addManagedListener(this.eventService, Events.EVENT_CELL_VALUE_CHANGED, this.onCellValueChanged.bind(this));
    }

    private onCellValueChanged(event: CellValueChangedEvent): void {

        // Clipboard service manages its own change detection, so no need to do it here.
        // The clipboard manages its own as otherwise this would happen once for every cell
        // that got updated as part of a paste operation, so e.g. if 100 cells in a paste operation,
        // this doChangeDetection would get called 100 times (once for each cell), instead clipboard
        // service executes the logic we have here once (in essence batching up all cell changes
        // into one change detection).
        if (event.source === SOURCE_PASTE) { return; }

        this.doChangeDetection(event.node as RowNode, event.column);
    }

    private doChangeDetection(rowNode: RowNode, column: Column): void {
        if (this.gridOptionsService.get('suppressChangeDetection')) { return; }

        const nodesToRefresh: RowNode[] = [rowNode];

        // step 1 of change detection is to update the aggregated values
        if (this.clientSideRowModel && !rowNode.isRowPinned()) {
            const onlyChangedColumns = this.gridOptionsService.get('aggregateOnlyChangedColumns');
            const changedPath = new ChangedPath(onlyChangedColumns, this.clientSideRowModel.getRootNode());
            changedPath.addParentNode(rowNode.parent, [column]);
            this.clientSideRowModel.doAggregate(changedPath);

            // add all nodes impacted by aggregation, as they need refreshed also.
            changedPath.forEachChangedNodeDepthFirst(rowNode => {
                nodesToRefresh.push(rowNode);
            });
        }

        // step 2 of change detection is to refresh the cells
        this.rowRenderer.refreshCells({ rowNodes: nodesToRefresh });
    }
}
