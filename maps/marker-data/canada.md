---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Canada

#### JavaScript Alias: maps/canada


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
</ul>
<div class='tab-content'>
    
<div class='tab new-json-tab active'>
<pre><code class="language-json">
{
    "map": {
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "CCCCCC",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "usehovercolor": "0",
        "hoveronempty": "0",
        "showmarkertooltip": "1",
        "canvasBorderColor": "375277",
        "canvasBorderAlpha": "0"
    },
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            }
        ],
        "items": [
            {
                "id": "WH",
                "shapeid": "myCustomShape",
                "x": "43.65",
                "y": "216.94",
                "label": "White Horse",
                "labelpos": "right"
            },
            {
                "id": "YK",
                "shapeid": "myCustomShape",
                "x": "169.66",
                "y": "247.69",
                "label": "YellowKnife ",
                "labelpos": "bottom"
            },
            {
                "id": "IQ",
                "shapeid": "myCustomShape",
                "x": "419.69",
                "y": "223.88",
                "label": "Iqaluit ",
                "labelpos": "right"
            },
            {
                "id": "VC",
                "shapeid": "myCustomShape",
                "x": "37.7",
                "y": "392.55",
                "label": "Victoria ",
                "labelpos": "bottom"
            },
            {
                "id": "ED",
                "shapeid": "myCustomShape",
                "x": "134.93",
                "y": "348.9",
                "label": "Edmonton ",
                "labelpos": "bottom"
            },
            {
                "id": "RE",
                "shapeid": "myCustomShape",
                "x": "204.39",
                "y": "410.41",
                "label": "Regina "
            },
            {
                "id": "WI",
                "shapeid": "myCustomShape",
                "x": "265.9",
                "y": "429.26",
                "label": "Winnipeg "
            },
            {
                "id": "TO",
                "shapeid": "myCustomShape",
                "x": "427.63",
                "y": "496.73",
                "label": "Toronto ",
                "labelpos": "bottom"
            },
            {
                "id": "QU",
                "shapeid": "myCustomShape",
                "x": "486.17",
                "y": "427.28",
                "label": "Quebec ",
                "labelpos": "bottom"
            },
            {
                "id": "FR",
                "shapeid": "myCustomShape",
                "x": "529.82",
                "y": "418.35",
                "label": "Fredericton",
                "labelpos": "bottom"
            },
            {
                "id": "HA",
                "shapeid": "myCustomShape",
                "x": "566.53",
                "y": "416.37",
                "label": "Halifax",
                "labelpos": "right"
            },
            {
                "id": "CT",
                "shapeid": "myCustomShape",
                "x": "551.65",
                "y": "404.46",
                "label": "CharlotteTown"
            },
            {
                "id": "SJ",
                "shapeid": "myCustomShape",
                "x": "624.08",
                "y": "344.93",
                "label": "St.John's",
                "labelpos": "left"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-json">
{
    "map": {},
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            }
        ],
        "definition": [
            {
                "id": "WH",
                "x": "43.65",
                "y": "216.94",
                "label": "White Horse",
                "labelpos": "right"
            },
            {
                "id": "YK",
                "x": "169.66",
                "y": "247.69",
                "label": "YellowKnife ",
                "labelpos": "bottom"
            },
            {
                "id": "IQ",
                "x": "419.69",
                "y": "223.88",
                "label": "Iqaluit ",
                "labelpos": "right"
            },
            {
                "id": "VC",
                "x": "37.7",
                "y": "392.55",
                "label": "Victoria ",
                "labelpos": "bottom"
            },
            {
                "id": "ED",
                "x": "134.93",
                "y": "348.9",
                "label": "Edmonton ",
                "labelpos": "bottom"
            },
            {
                "id": "RE",
                "x": "204.39",
                "y": "410.41",
                "label": "Regina "
            },
            {
                "id": "WI",
                "x": "265.9",
                "y": "429.26",
                "label": "Winnipeg "
            },
            {
                "id": "TO",
                "x": "427.63",
                "y": "496.73",
                "label": "Toronto ",
                "labelpos": "bottom"
            },
            {
                "id": "QU",
                "x": "486.17",
                "y": "427.28",
                "label": "Quebec ",
                "labelpos": "bottom"
            },
            {
                "id": "FR",
                "x": "529.82",
                "y": "418.35",
                "label": "Fredericton",
                "labelpos": "bottom"
            },
            {
                "id": "HA",
                "x": "566.53",
                "y": "416.37",
                "label": "Halifax",
                "labelpos": "right"
            },
            {
                "id": "CT",
                "x": "551.65",
                "y": "404.46",
                "label": "CharlotteTown"
            },
            {
                "id": "SJ",
                "x": "624.08",
                "y": "344.93",
                "label": "St.John's",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "WH",
                "shapeid": "myCustomShape"
            },
            {
                "id": "YK",
                "shapeid": "myCustomShape"
            },
            {
                "id": "IQ",
                "shapeid": "myCustomShape"
            },
            {
                "id": "VC",
                "shapeid": "myCustomShape"
            },
            {
                "id": "ED",
                "shapeid": "myCustomShape"
            },
            {
                "id": "RE",
                "shapeid": "myCustomShape"
            },
            {
                "id": "WI",
                "shapeid": "myCustomShape"
            },
            {
                "id": "TO",
                "shapeid": "myCustomShape"
            },
            {
                "id": "QU",
                "shapeid": "myCustomShape"
            },
            {
                "id": "FR",
                "shapeid": "myCustomShape"
            },
            {
                "id": "HA",
                "shapeid": "myCustomShape"
            },
            {
                "id": "CT",
                "shapeid": "myCustomShape"
            },
            {
                "id": "SJ",
                "shapeid": "myCustomShape"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
