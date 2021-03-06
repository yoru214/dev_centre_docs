{
    type: 'dragnode',
    renderAt: 'chart-container',
    width: '800',
    height: '600',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Railway Map",
            "xAxisMinValue": "0",
            "xAxisMaxValue": "100",
            "yAxisMinValue": "0",
            "yAxisMaxValue": "100",
            "is3d": "0",
            "showFormBtn": "0",
            "formAction": "resources/php/chart-guide-drag-node-chart-adding-and-editing-nodes.php",
            "formTarget": "_blank",
            "formMethod": "POST",
            "viewMode": "0",
            "showPlotBorder": "1",
            "plotBorderThickness": "4",
            "theme": "fusion",
            "showCanvasBorder": "1",
            "canvasBorderAlpha": "20"
        },
        "dataset": [{
            "data": [{
                "id": "01",
                "label": "Santa Monica",
                "color": "#ffffff",
                "x": "16",
                "y": "54",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "02",
                "label": "Los Angeles",
                "color": "#ffffff",
                "x": "27",
                "y": "54",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "03",
                "label": "Ontario",
                "color": "#ffffff",
                "x": "48",
                "y": "54",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "04",
                "label": "Phoenix",
                "color": "#ffffff",
                "x": "85",
                "y": "54",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "05",
                "label": "Flagstaff",
                "color": "#ffffff",
                "x": "85",
                "y": "80",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "06",
                "label": "Barstow",
                "color": "#ffffff",
                "x": "62",
                "y": "80",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "07",
                "label": "San Diego",
                "color": "#ffffff",
                "x": "35",
                "y": "30",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "08",
                "label": "San Ysidro",
                "color": "#ffffff",
                "x": "40",
                "y": "12",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "09",
                "label": "Las Vegas",
                "color": "#ffffff",
                "x": "68",
                "y": "93",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "10",
                "label": "",
                "color": "#ffffff",
                "x": "12",
                "y": "98",
                "radius": "0",
                "shape": "circle"
            }, {
                "id": "11",
                "label": "",
                "color": "#ffffff",
                "x": "100",
                "y": "80",
                "radius": "0",
                "shape": "circle"
            }, {
                "id": "12",
                "label": "",
                "color": "#ffffff",
                "x": "99",
                "y": "40",
                "radius": "0",
                "shape": "circle"
            }, {
                "id": "13",
                "label": "Yuma",
                "color": "#ffffff",
                "x": "70",
                "y": "30",
                "radius": "30",
                "shape": "circle"
            }, {
                "id": "14",
                "label": "",
                "color": "#ffffff",
                "x": "100",
                "y": "30",
                "radius": "0",
                "shape": "circle"
            }]
        }],
        "connectors": [{
            "color": "#ffffff",
            "stdThickness": "20",
            "connector": [{
                "from": "01",
                "to": "02",
                "color": "#fec110",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "02",
                "to": "03",
                "color": "#fec110",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "03",
                "to": "04",
                "color": "#fec110",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "04",
                "to": "12",
                "color": "#fec110",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "04",
                "to": "05",
                "color": "#a6aaad",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "09",
                "to": "06",
                "color": "#0178bc",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "06",
                "to": "03",
                "color": "#0178bc",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "03",
                "to": "07",
                "color": "#0178bc",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "05",
                "to": "06",
                "color": "#f1277d",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "06",
                "to": "11",
                "color": "#f1277d",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "02",
                "to": "07",
                "color": "#c1c733",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "07",
                "to": "08",
                "color": "#c1c733",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "02",
                "to": "10",
                "color": "#c1c733",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "07",
                "to": "13",
                "color": "#6d6e70",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }, {
                "from": "13",
                "to": "14",
                "color": "#6d6e70",
                "arrowAtStart": "0",
                "arrowAtEnd": "0"
            }]
        }],
        "labels": {
            "label": []
        }
    }
}
