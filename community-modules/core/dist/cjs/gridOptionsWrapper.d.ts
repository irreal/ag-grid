// Type definitions for @ag-grid-community/core v23.2.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowNode } from './entities/rowNode';
import { ChartRef, FillOperationParams, GetChartToolbarItems, GetContextMenuItems, GetMainMenuItems, GetRowNodeIdFunc, GridOptions, IsRowMaster, IsRowSelectable, NavigateToNextCellParams, NodeChildDetails, PaginationNumberFormatterParams, PostProcessPopupParams, ProcessChartOptionsParams, ProcessDataFromClipboardParams, TabToNextCellParams } from './entities/gridOptions';
import { GridApi } from './gridApi';
import { ColDef, ColGroupDef, IAggFunc, SuppressKeyboardEventParams } from './entities/colDef';
import { ColumnApi } from './columnController/columnApi';
import { IViewportDatasource } from './interfaces/iViewportDatasource';
import { IDatasource } from './interfaces/iDatasource';
import { CellPosition } from './entities/cellPosition';
import { IServerSideDatasource } from './interfaces/iServerSideDatasource';
import { BaseExportParams, ProcessCellForExportParams, ProcessHeaderForExportParams } from './interfaces/exportParams';
import { AgEvent } from './events';
import { SideBarDef } from './entities/sideBar';
import { ChartOptions } from './interfaces/iChartOptions';
export interface PropertyChangedEvent extends AgEvent {
    currentValue: any;
    previousValue: any;
}
export declare class GridOptionsWrapper {
    private static MIN_COL_WIDTH;
    static PROP_HEADER_HEIGHT: string;
    static PROP_GROUP_REMOVE_SINGLE_CHILDREN: string;
    static PROP_GROUP_REMOVE_LOWEST_SINGLE_CHILDREN: string;
    static PROP_PIVOT_HEADER_HEIGHT: string;
    static PROP_SUPPRESS_CLIPBOARD_PASTE: string;
    static PROP_GROUP_HEADER_HEIGHT: string;
    static PROP_PIVOT_GROUP_HEADER_HEIGHT: string;
    static PROP_FLOATING_FILTERS_HEIGHT: string;
    static PROP_SUPPRESS_ROW_CLICK_SELECTION: string;
    static PROP_SUPPRESS_ROW_DRAG: string;
    static PROP_SUPPRESS_MOVE_WHEN_ROW_DRAG: string;
    static PROP_POPUP_PARENT: string;
    static PROP_DOM_LAYOUT: string;
    private readonly gridOptions;
    private readonly columnController;
    private readonly eventService;
    private readonly environment;
    private readonly autoHeightCalculator;
    private propertyEventService;
    private domDataKey;
    private layoutElements;
    private scrollWidth;
    private updateLayoutClassesListener;
    private agWire;
    private destroy;
    init(): void;
    private checkColumnDefProperties;
    private checkGridOptionsProperties;
    private checkProperties;
    getDomData(element: Node, key: string): any;
    setDomData(element: Element, key: string, value: any): any;
    isRowSelection(): boolean;
    isRowDeselection(): boolean;
    isRowSelectionMulti(): boolean;
    isRowMultiSelectWithClick(): boolean;
    getContext(): any;
    isPivotMode(): boolean;
    isPivotTotals(): boolean;
    getPivotColumnGroupTotals(): string;
    getPivotRowTotals(): string;
    isRowModelInfinite(): boolean;
    isRowModelViewport(): boolean;
    isRowModelServerSide(): boolean;
    isRowModelDefault(): boolean;
    isFullRowEdit(): boolean;
    isSuppressFocusAfterRefresh(): boolean;
    isSuppressBrowserResizeObserver(): boolean;
    isSuppressMaintainUnsortedOrder(): boolean;
    isSuppressClearOnFillReduction(): boolean;
    isShowToolPanel(): boolean;
    getSideBar(): SideBarDef;
    isSuppressTouch(): boolean;
    isSuppressRowTransform(): boolean;
    isSuppressSetColumnStateEvents(): boolean;
    isAllowDragFromColumnsToolPanel(): boolean;
    useAsyncEvents(): boolean;
    isEnableCellChangeFlash(): boolean;
    getCellFlashDelay(): number;
    getCellFadeDelay(): number;
    isGroupSelectsChildren(): boolean;
    isSuppressRowHoverHighlight(): boolean;
    isGroupSelectsFiltered(): boolean;
    isGroupHideOpenParents(): boolean;
    isGroupMultiAutoColumn(): boolean;
    isGroupRemoveSingleChildren(): boolean;
    isGroupRemoveLowestSingleChildren(): boolean;
    isGroupIncludeFooter(): boolean;
    isGroupIncludeTotalFooter(): boolean;
    isGroupSuppressBlankHeader(): boolean;
    isSuppressRowClickSelection(): boolean;
    isSuppressCellSelection(): boolean;
    isSuppressMultiSort(): boolean;
    isMultiSortKeyCtrl(): boolean;
    isGroupSuppressAutoColumn(): boolean;
    isPivotSuppressAutoColumn(): boolean;
    isSuppressDragLeaveHidesColumns(): boolean;
    isSuppressScrollOnNewData(): boolean;
    isRowDragManaged(): boolean;
    isSuppressRowDrag(): boolean;
    isSuppressMoveWhenRowDragging(): boolean;
    isEnableMultiRowDragging(): boolean;
    getDomLayout(): string;
    isSuppressHorizontalScroll(): boolean;
    isSuppressMaxRenderedRowRestriction(): boolean;
    isExcludeChildrenWhenTreeDataFiltering(): boolean;
    isAlwaysShowVerticalScroll(): boolean;
    isSuppressLoadingOverlay(): boolean;
    isSuppressNoRowsOverlay(): boolean;
    isSuppressFieldDotNotation(): boolean;
    getPinnedTopRowData(): any[] | undefined;
    getPinnedBottomRowData(): any[] | undefined;
    isFunctionsPassive(): boolean;
    isSuppressTabbing(): boolean;
    isSuppressChangeDetection(): boolean;
    isSuppressAnimationFrame(): boolean;
    getQuickFilterText(): string | undefined;
    isCacheQuickFilter(): boolean;
    isUnSortIcon(): boolean;
    isSuppressMenuHide(): boolean;
    isEnterMovesDownAfterEdit(): boolean;
    isEnterMovesDown(): boolean;
    isUndoRedoCellEditing(): boolean;
    getUndoRedoCellEditingLimit(): number;
    getRowStyle(): any;
    getRowClass(): string | string[];
    getRowStyleFunc(): Function;
    getRowClassFunc(): (params: any) => string | string[];
    rowClassRules(): {
        [cssClassName: string]: string | ((params: any) => boolean);
    };
    getCreateChartContainerFunc(): (params: ChartRef) => void | undefined;
    getPopupParent(): HTMLElement;
    getBlockLoadDebounceMillis(): number;
    getPostProcessPopupFunc(): ((params: PostProcessPopupParams) => void) | undefined;
    getDoesDataFlowerFunc(): ((data: any) => boolean) | undefined;
    getPaginationNumberFormatterFunc(): ((params: PaginationNumberFormatterParams) => string) | undefined;
    getChildCountFunc(): (dataItem: any) => number;
    getDefaultGroupSortComparator(): (nodeA: RowNode, nodeB: RowNode) => number;
    getIsFullWidthCellFunc(): ((rowNode: RowNode) => boolean) | undefined;
    getFullWidthCellRendererParams(): any;
    isEmbedFullWidthRows(): boolean;
    getSuppressKeyboardEventFunc(): (params: SuppressKeyboardEventParams) => boolean;
    getBusinessKeyForNodeFunc(): (node: RowNode) => string;
    getApi(): GridApi | undefined | null;
    getColumnApi(): ColumnApi | undefined | null;
    isImmutableData(): boolean;
    isImmutableColumns(): boolean;
    isEnsureDomOrder(): boolean;
    isEnableCharts(): boolean;
    getColResizeDefault(): string;
    isSingleClickEdit(): boolean;
    isSuppressClickEdit(): boolean;
    isStopEditingWhenGridLosesFocus(): boolean;
    getGroupDefaultExpanded(): number | undefined;
    getMaxConcurrentDatasourceRequests(): number;
    getMaxBlocksInCache(): number | undefined;
    getCacheOverflowSize(): number | undefined;
    getPaginationPageSize(): number | undefined;
    isPaginateChildRows(): boolean;
    getCacheBlockSize(): number | undefined;
    getInfiniteInitialRowCount(): number | undefined;
    isPurgeClosedRowNodes(): boolean;
    isSuppressPaginationPanel(): boolean;
    getRowData(): any[] | undefined;
    isGroupUseEntireRow(pivotMode: boolean): boolean;
    isEnableRtl(): boolean;
    getAutoGroupColumnDef(): ColDef | undefined;
    isGroupSuppressRow(): boolean;
    getRowGroupPanelShow(): string;
    getPivotPanelShow(): string;
    isAngularCompileRows(): boolean;
    isAngularCompileFilters(): boolean;
    isAngularCompileHeaders(): boolean;
    isDebug(): boolean;
    getColumnDefs(): (ColGroupDef | ColDef)[];
    getColumnTypes(): {
        [key: string]: ColDef;
    } | undefined;
    getDatasource(): IDatasource | undefined;
    getViewportDatasource(): IViewportDatasource;
    getServerSideDatasource(): IServerSideDatasource | undefined;
    isAccentedSort(): boolean;
    isEnableBrowserTooltips(): boolean;
    isEnableCellExpressions(): boolean;
    isEnableGroupEdit(): boolean;
    isSuppressMiddleClickScrolls(): boolean;
    isPreventDefaultOnContextMenu(): boolean;
    isSuppressPreventDefaultOnMouseWheel(): boolean;
    isSuppressColumnVirtualisation(): boolean;
    isSuppressContextMenu(): boolean;
    isAllowContextMenuWithControlKey(): boolean;
    isSuppressCopyRowsToClipboard(): boolean;
    isCopyHeadersToClipboard(): boolean;
    isSuppressClipboardPaste(): boolean;
    isSuppressLastEmptyLineOnPaste(): boolean;
    isPagination(): boolean;
    isSuppressEnterpriseResetOnNewColumns(): boolean;
    getProcessDataFromClipboardFunc(): ((params: ProcessDataFromClipboardParams) => string[][]) | undefined;
    getAsyncTransactionWaitMillis(): number | undefined;
    isSuppressMovableColumns(): boolean;
    isAnimateRows(): boolean;
    isSuppressColumnMoveAnimation(): boolean;
    isSuppressAggFuncInHeader(): boolean;
    isSuppressAggAtRootLevel(): boolean;
    isEnableRangeSelection(): boolean;
    isEnableRangeHandle(): boolean;
    isEnableFillHandle(): boolean;
    getFillOperation(): ((params: FillOperationParams) => any) | undefined;
    isSuppressMultiRangeSelection(): boolean;
    isPaginationAutoPageSize(): boolean;
    isRememberGroupStateWhenNewData(): boolean;
    getIcons(): any;
    getAggFuncs(): {
        [key: string]: IAggFunc;
    } | undefined;
    getSortingOrder(): (string | null)[] | undefined;
    getAlignedGrids(): GridOptions[] | undefined;
    isMasterDetail(): boolean;
    isKeepDetailRows(): boolean;
    getKeepDetailRowsCount(): number;
    getIsRowMasterFunc(): IsRowMaster | undefined;
    getIsRowSelectableFunc(): IsRowSelectable | undefined;
    getGroupRowRendererParams(): any;
    getOverlayLoadingTemplate(): string;
    getOverlayNoRowsTemplate(): string;
    isSuppressAutoSize(): boolean;
    isEnableCellTextSelection(): boolean;
    isSuppressParentsInRowNodes(): boolean;
    isFunctionsReadOnly(): boolean;
    isFloatingFilter(): boolean | undefined;
    isEnableCellTextSelect(): boolean;
    isEnableOldSetFilterModel(): boolean;
    getDefaultColDef(): ColDef | undefined;
    getDefaultColGroupDef(): ColGroupDef | undefined;
    getDefaultExportParams(): BaseExportParams | undefined;
    isSuppressCsvExport(): boolean;
    isAllowShowChangeAfterFilter(): boolean;
    isSuppressExcelExport(): boolean;
    isSuppressMakeColumnVisibleAfterUnGroup(): boolean;
    getNodeChildDetailsFunc(): ((dataItem: any) => NodeChildDetails) | undefined;
    getDataPathFunc(): ((dataItem: any) => string[]) | undefined;
    getIsServerSideGroupFunc(): ((dataItem: any) => boolean) | undefined;
    getServerSideGroupKeyFunc(): ((dataItem: any) => string) | undefined;
    getGroupRowAggNodesFunc(): (nodes: RowNode[]) => any;
    getContextMenuItemsFunc(): GetContextMenuItems | undefined;
    getMainMenuItemsFunc(): GetMainMenuItems | undefined;
    getChartToolbarItemsFunc(): GetChartToolbarItems | undefined;
    getRowNodeIdFunc(): GetRowNodeIdFunc | undefined;
    getNavigateToNextCellFunc(): ((params: NavigateToNextCellParams) => CellPosition) | undefined;
    getTabToNextCellFunc(): ((params: TabToNextCellParams) => CellPosition) | undefined;
    isTreeData(): boolean;
    isValueCache(): boolean;
    isValueCacheNeverExpires(): boolean;
    isDeltaSort(): boolean;
    isAggregateOnlyChangedColumns(): boolean;
    getProcessSecondaryColDefFunc(): ((colDef: ColDef) => void) | undefined;
    getProcessSecondaryColGroupDefFunc(): ((colGroupDef: ColGroupDef) => void) | undefined;
    getSendToClipboardFunc(): (params: any) => void;
    getProcessRowPostCreateFunc(): any;
    getProcessCellForClipboardFunc(): ((params: ProcessCellForExportParams) => any) | undefined;
    getProcessHeaderForClipboardFunc(): ((params: ProcessHeaderForExportParams) => any) | undefined;
    getProcessCellFromClipboardFunc(): ((params: ProcessCellForExportParams) => any) | undefined;
    getViewportRowModelPageSize(): number;
    getViewportRowModelBufferSize(): number;
    isServerSideSortingAlwaysResets(): boolean;
    getPostSortFunc(): ((rowNodes: RowNode[]) => void) | undefined;
    getProcessChartOptionsFunc(): (params: ProcessChartOptionsParams) => ChartOptions<any>;
    getClipboardDeliminator(): string;
    setProperty(key: string, value: any, force?: boolean): void;
    addLayoutElement(element: HTMLElement): void;
    private updateLayoutClasses;
    addEventListener(key: string, listener: Function): void;
    static checkEventDeprecation(eventName: string): void;
    removeEventListener(key: string, listener: Function): void;
    isSkipHeaderOnAutoSize(): boolean;
    getAutoSizePadding(): number;
    getHeaderHeight(): number;
    getFloatingFiltersHeight(): number;
    getGroupHeaderHeight(): number;
    getPivotHeaderHeight(): number;
    getPivotGroupHeaderHeight(): number;
    isExternalFilterPresent(): boolean;
    doesExternalFilterPass(node: RowNode): boolean;
    getTooltipShowDelay(): number;
    isTooltipMouseTrack(): boolean;
    getDocument(): Document;
    getMinColWidth(): number;
    getMaxColWidth(): number;
    getColWidth(): number;
    getRowBuffer(): number;
    getRowBufferInPixels(): number;
    getScrollbarWidth(): number;
    private checkForDeprecated;
    private checkForViolations;
    private treeDataViolations;
    getLocaleTextFunc(): (key: string, defaultValue: string) => string;
    globalEventHandler(eventName: string, event?: any): void;
    getRowHeightAsNumber(): number;
    getRowHeightForNode(rowNode: RowNode, allowEstimate?: boolean): {
        height: number;
        estimated: boolean;
    };
    isDynamicRowHeight(): boolean;
    getListItemHeight(): number;
    chartMenuPanelWidth(): number;
    private isNumeric;
    private getFromTheme;
    private getDefaultRowHeight;
}
