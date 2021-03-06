var chart = jui.include("chart.builder");

chart("#result", {
    axis : {
        x : {
            type : "fullblock",
            domain : [ "2010", "2011", "2012", "2013" ],
            line : true
        },
        y : {
            type : "range",
            domain : function(d) {
                return Math.max(d.apple, d.microsoft, d.oracle);
            },
            step : 10
        },
        data : [
            { apple : 26.1, microsoft : 24.86, oracle : 22.08 },
            { apple : 43.83, microsoft : 25.14, oracle : 30.15 },
            { apple : 55.03, microsoft : 24, oracle : 24.88 },
            { apple : 72.95, microsoft : 25.39, oracle : 32.78 }
        ]
    },
    brush : [{
        type : "line",
        animate : true
    }, {
        type : "scatter",
        hide : true
    }],
    widget : [
    	{ type : "title", text : "Line Sample" },
    	{ type : "legend" },
        { type : "tooltip", brush : 1 }
    ]
});
