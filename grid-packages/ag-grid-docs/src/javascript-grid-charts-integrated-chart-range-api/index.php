<?php
$pageTitle = "Charts: Chart API";
$pageDescription = "ag-Grid is a feature-rich data grid that can also chart data out of the box. Learn how to chart data directly from inside ag-Grid.";
$pageKeywords = "Javascript Grid Charting";
$pageGroup = "feature";
include '../documentation-main/documentation_header.php';
?>

<h1 class="heading-enterprise">Chart API</h1>

<p class="lead">
    In addition to users creating their own charts from the grid, charts can also be generated by using the Chart API.
</p>

<h2>Range Charts</h2>

<p>
    Charts can be created programmatically from a range via the grid's <code>createRangeChart()</code> API. The
    interface is as follows:
</p>

<?= createSnippet('function createRangeChart(params: CreateRangeChartParams): ChartRef | undefined;', 'ts') ?>

<?php createDocumentationFromFile('chart-api.json', 'params', [], ['showSnippets' => true]) ?>

<p>
    The API returns a <code>ChartRef</code> object when a <code>chartContainer</code> is provided.
    This is the same structure that is provided to the <code>createChartContainer()</code> callback.
    The <code>ChartRef</code> provides the application with the <code>destroyChart()</code>
    method that is required when the application wants to dispose the chart.
</p>

<h3>Example: Charts in Grid Popup Window</h3>

<p>
    This example shows how charts can be created in the grid's provided popup window. The following can be noted:
</p>

<ul class="content">
    <li>
        Clicking <b>'Top 5 Medal Winners'</b> will chart the first five rows of Gold and Silver medals by Country.
    </li>
    <li>
        Clicking <b>'Bronze Medals by Country'</b> will chart Bronze by Country using all rows
        (the provided cell range does not specify rows).
    </li>
    <li>Note the <b>'Bronze Medals by Country'</b> chart is unlinked from the grid as <code>chartUnlinked=true</code>. Notice that sorting
    in the grid does not affect the chart and there is no chart range in the grid.</li>

</ul>

<?= grid_example('Charts in Grid Popup Window', 'chart-api', 'generated', ['enterprise' => true]) ?>

<h3>Example: Charts in Dashboard</h3>

<p>
    This example passes a <code>chartContainer</code> to the API to place the chart in a location other
    than the grid's popup window. The following can be noted:
</p>

<ul class="content">
    <li>The charts are placed in <code>div</code> elements outside of the grid.</li>
    <li>The two pie charts are showing aggregations rather than charting individual rows.</li>
    <li>Clicking on a chart highlights the range in the grid for which the chart is based.</li>
    <li>
        The bar chart is sensitive to changes in the rows. For example if you sort, the chart updates to
        always chart the first five rows.
    </li>
    <li>All data is editable in the grid. Changes to the grid data is reflected in the charts.</li>
    <li>
        The two pie charts have legends beneath. This is configured in the
        <code>chartThemeOverrides</code>.
    </li>
</ul>

<?= grid_example('Charts in Dashboard', 'dashboard', 'generated', ['enterprise' => true, 'exampleHeight' => 700]) ?>

<h2>Pivot Charts</h2>

<p>
    You can also use the API to create a pivot chart. There are fewer parameters available as the pivot chart is always
    generated from all data in the grid:
</p>

<snippet language="ts">
function createPivotChart(params: CreatePivotChartParams): ChartRef | undefined;

interface CreatePivotChartParams {
    chartType: ChartType;
    chartThemeName?: string;
    chartContainer?: HTMLElement;
    chartThemeOverrides?: AgChartTheme;
    unlinkChart?: boolean;
}
</snippet>

<p>The pivot chart params share the same behaviour as the
<a href="../javascript-grid-charts-integrated-chart-range-api/#reference-params">Range Chart Params</a> above.
</p>

<h3>Example: Pivot Chart</h3>

<p>This is an example showing the pivot chart API in action, using a specified chart container.</p>

<?= grid_example('Pivot Chart', 'pivot-chart-api', 'generated', ['enterprise' => true, 'exampleHeight' => 900]) ?>

<h2>Saving and Restoring Charts</h2>

<p>
    You can access models that represent rendered charts using the <code>getChartModels()</code> API. The models are returned in a format that can be
    easily used with the other API methods to later recreate the chart. You can also retrieve a base64 encoded image rendered from the chart in the model.
</p>

<snippet language="ts">
function getChartModels(): ChartModel[];

interface ChartModel {
    chartId: string;
    cellRange: CellRangeParams;
    chartType: ChartType;
    chartThemeName: string;
    chartOptions: ChartOptions;
    chart: any;
    getChartImageDataURL: (params: GetChartImageDataUrlParams) => string;
}

interface GetChartImageDataUrlParams {
    type?: string;
}
</snippet>

<h3>Example: Saving and Restoring Charts</h3>

<p>
    The example below demonstrates how you can save and then later restore a chart. You can make changes to the chart
    type, theme, data and formatting options and note how the restored chart looks the same as the chart that was saved.
</p>
<p>
    It also shows how you can retrieve images rendered from the chart in multiple formats.
</p>

<ul class="content">
    <li>Create a range chart from the grid, which will be shown in a container below the grid.</li>
    <li>Change the chart type, theme, data and/or formatting in order to see the changes restored later.</li>
    <li>Click "Save chart" to persist a model of the visible chart into a local variable. An alert will be shown to confirm that this has happened.</li>
    <li>Click "Clear chart" to destroy the existing chart.</li>
    <li>Click "Restore chart" to restore the previously saved chart.</li>
    <li>Click "Open PNG" to open a PNG format image of the chart in a new window.</li>
    <li>Click "Open JPG" to open a JPG format image of the chart in a new window.</li>
</ul>

<?= grid_example('Saving and Restoring Charts', 'saving-and-restoring-charts', 'generated', ['exampleHeight' => 800,'enterprise' => true]) ?>

<h2>Next Up</h2>

<p>
    Continue to the next section to learn about: <a href="../javascript-grid-charts-integrated-chart-events/">Chart Events</a>.
</p>

<?php include '../documentation-main/documentation_footer.php'; ?>
