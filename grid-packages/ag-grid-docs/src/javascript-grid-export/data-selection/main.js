var columnDefs = [
    {
        headerName: 'Athlete Fields',
        children: [
            {
                headerName: 'When and Where',
                children: [
                    {headerName: 'Country', field: 'country', width: 120, rowGroup: true},
                    {headerName: 'Year', field: 'year', width: 85, rowGroup: true}
                ]
            },
            {
                headerName: 'Athlete',
                children: [
                    {headerName: 'Name', field: 'athlete', width: 150},
                    {headerName: 'Name Length', valueGetter: 'data ? data.athlete.length : ""', width: 140},
                    {
                        headerName: 'Age',
                        field: 'age',
                        width: 90
                    },
                    {headerName: 'Sport', field: 'sport', width: 120, rowGroup: true}
                ]
            }
        ]
    },
    {
        headerName: 'Medal Fields',
        children: [
            {headerName: 'Date', field: 'date', width: 110},
            {
                headerName: 'Medal Types',
                children: [
                    {headerName: 'Silver', field: 'silver', width: 130, aggFunc: 'sum'},
                    {headerName: 'Bronze', field: 'bronze', width: 140, aggFunc: 'sum'},
                    {headerName: 'Total', field: 'total', width: 130, aggFunc: 'sum'}
                ]
            }
        ]
    },
];

var gridOptions = {
    defaultColDef: {
        sortable: true,
        filter: true
    },
    columnDefs: columnDefs,
    rowSelection: 'multiple',
    rowDeselection: true,
    pinnedTopRowData: [
        {
            athlete: 'Floating Top Athlete',
            age: 999,
            country: 'Floating Top Country',
            year: 2020,
            date: '01-08-2020',
            sport: 'Floating Top Sport',
            gold: 22,
            silver: 33,
            bronze: 44,
            total: 55
        }
    ],
    pinnedBottomRowData: [
        {
            athlete: 'Floating Bottom Athlete',
            age: 888,
            country: 'Floating Bottom Country',
            year: 2030,
            date: '01-08-2030',
            sport: 'Floating Bottom Sport',
            gold: 222,
            silver: 233,
            bronze: 244,
            total: 255
        }
    ],
    groupIncludeFooter: true,
    groupIncludeTotalFooter: true
};

function getBooleanValue(checkboxSelector) {
    return document.querySelector(checkboxSelector).checked === true;
}

function only20YearOlds(params) {
    return params.node.data && params.node.data.age != 20;
}

function getParams() {
    return {
        allColumns: getBooleanValue('#allColumns'),
        columnGroups: getBooleanValue('#columnGroups'),
        columnKeys: getBooleanValue('#columnKeys') && ['country', 'bronze'],
        onlySelected: getBooleanValue('#onlySelected'),
        onlySelectedAllPages: getBooleanValue('#onlySelectedAllPages'),
        shouldRowBeSkipped: getBooleanValue('#shouldRowBeSkipped') && only20YearOlds,
        skipFooters: getBooleanValue('#skipFooters'),
        skipGroups: getBooleanValue('#skipGroups'),
        skipHeader: getBooleanValue('#skipHeader'),
        skipPinnedTop: getBooleanValue('#skipPinnedTop'),
        skipPinnedBottom: getBooleanValue('#skipPinnedBottom')
    };
}

function validateSelection(params) {
    var message = '';
    var errorDiv = document.querySelector('.example-error');
    var messageDiv = errorDiv.querySelector('.message');

    if (params.onlySelected || params.onlySelectedAllPages) {
        message += params.onlySelected ? 'onlySelected' : 'onlySelectedAllPages';
        message += ' is checked, please selected a row.'

        if (!gridOptions.api.getSelectedNodes().length) {
            errorDiv.classList.remove('inactive');
            messageDiv.innerHTML = message;
            window.setTimeout(function() {
                errorDiv.classList.add('inactive');
                messageDiv.innerHTML = '';
            }, 2000);
            return true;
        }
    }

    return false;
}

function onBtnExportDataAsCsv() {
    var params = getParams();
    if (validateSelection(params)) { return; }
    gridOptions.api.exportDataAsCsv(params);
}

function onBtnExportDataAsExcel() {
    var params = getParams();
    if (validateSelection(params)) { return; }
    gridOptions.api.exportDataAsExcel(params);
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var httpResult = JSON.parse(httpRequest.responseText);
            gridOptions.api.setRowData(httpResult);
            gridOptions.api.forEachNode(function(node) {
                node.expanded = true;
            });
            gridOptions.api.onGroupExpandedOrCollapsed();
        }
    };
});
