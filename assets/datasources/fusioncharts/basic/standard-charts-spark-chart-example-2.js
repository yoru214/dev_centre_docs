{
    type: 'sparkline',
    renderAt: 'chart-container',
    width: '450',
    height: '70',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Stock Price",
            "subcaption": "Last month",
            "numberPrefix": "$",
            "chartBottomMargin": "30",
            //Setting period length (Weekly period set to 7)
            "periodlength": "7",
            //Defining period color
            "periodcolor": "#cccccc",
            //Setting period transparency
            "periodalpha": "50",
            "showopenvalue": "1",
            "showclosevalue": "1"
        },
        "dataset": [{
            "data": [{
                "value": "38.42"
            }, {
                "value": "41.43"
            }, {
                "value": "34.78"
            }, {
                "value": "40.67"
            }, {
                "value": "44.12"
            }, {
                "value": "38.45"
            }, {
                "value": "40.71"
            }, {
                "value": "49.90"
            }, {
                "value": "40.12"
            }, {
                "value": "34.91"
            }, {
                "value": "42.02"
            }, {
                "value": "35.21"
            }, {
                "value": "43.31"
            }, {
                "value": "40.21"
            }, {
                "value": "40.54"
            }, {
                "value": "40.90"
            }, {
                "value": "54.21"
            }, {
                "value": "41.90"
            }, {
                "value": "33.43"
            }, {
                "value": "46.73"
            }, {
                "value": "50.42"
            }, {
                "value": "40.74"
            }, {
                "value": "42.31"
            }, {
                "value": "50.39"
            }, {
                "value": "51.10"
            }, {
                "value": "44.84"
            }, {
                "value": "51.64"
            }, {
                "value": "47.62"
            }, {
                "value": "39.61"
            }, {
                "value": "35.13"
            }]
        }]
    }
}
