var chart = jui.include("chart.builder");
var time = jui.include("util.time");

var dataSource = [
    { date: new Date(1994,2,1), l: 24.00, h: 25.00, o: 25.00, c: 24.875, v: 2762800 },
    { date: new Date(1994,2,2), l: 23.625, h: 25.125, o: 24.00, c: 24.875, v: 1467200 },
    { date: new Date(1994,2,3), l: 26.25, h: 28.25, o: 26.75, c: 27.00, v: 2088800 },
    { date: new Date(1994,2,4), l: 26.50, h: 27.875, o: 26.875, c: 27.25, v: 3962800 },
    { date: new Date(1994,2,7), l: 26.375, h: 27.50, o: 27.375, c: 26.75, v: 3544000 },
    { date: new Date(1994,2,8), l: 25.75, h: 26.875, o: 26.75, c: 26.00, v: 2195600 },
    { date: new Date(1994,2,9), l: 25.75, h: 26.75, o: 26.125, c: 26.25, v: 1420400 },
    { date: new Date(1994,2,10), l: 25.75, h: 26.375, o: 26.375, c: 25.875, v: 1656400 },
    { date: new Date(1994,2,11), l: 24.875, h: 26.125, o: 26.00, c: 25.375, v: 2035200 },
    { date: new Date(1994,2,14), l: 25.125, h: 26.00, o: 25.625, c: 25.75, v: 2468000 },
    { date: new Date(1994,2,15), l: 25.875, h: 26.625, o: 26.125, c: 26.375, v: 4130800 },
    { date: new Date(1994,2,16), l: 26.25, h: 27.375, o: 26.25, c: 27.25, v: 2307600 },
    { date: new Date(1994,2,17), l: 26.875, h: 27.25, o: 27.125, c: 26.875, v: 1979200 },
    { date: new Date(1994,2,18), l: 26.375, h: 27.125, o: 27.00, c: 27.125, v: 2310400 },
    { date: new Date(1994,2,21), l: 26.75, h: 27.875, o: 26.875, c: 27.75, v: 3233600 },
    { date: new Date(1994,2,22), l: 26.75, h: 28.375, o: 27.50, c: 27.00, v: 1174400 },
    { date: new Date(1994,2,23), l: 26.875, h: 28.125, o: 27.00, c: 28.00, v: 1706000 },
    { date: new Date(1994,2,24), l: 26.25, h: 27.875, o: 27.75, c: 27.625, v: 1392800 },
    { date: new Date(1994,2,25), l: 27.50, h: 28.75, o: 27.75, c: 28.00, v: 2134000 },
    { date: new Date(1994,2,28), l: 25.75, h: 28.25, o: 28.00, c: 27.25, v: 1909200 },

    { date: new Date(1994,3,1), l: 24.00, h: 25.00, o: 25.00, c: 24.875, v: 2762800 },
    { date: new Date(1994,3,2), l: 23.625, h: 25.125, o: 24.00, c: 24.875, v: 1467200 },
    { date: new Date(1994,3,3), l: 26.25, h: 28.25, o: 26.75, c: 27.00, v: 2088800 },
    { date: new Date(1994,3,4), l: 26.50, h: 27.875, o: 26.875, c: 27.25, v: 3962800 },
    { date: new Date(1994,3,7), l: 26.375, h: 27.50, o: 27.375, c: 26.75, v: 3544000 },
    { date: new Date(1994,3,8), l: 25.75, h: 26.875, o: 26.75, c: 26.00, v: 2195600 },
    { date: new Date(1994,3,9), l: 25.75, h: 26.75, o: 26.125, c: 26.25, v: 1420400 },
    { date: new Date(1994,3,10), l: 25.75, h: 26.375, o: 26.375, c: 25.875, v: 1656400 },
    { date: new Date(1994,3,11), l: 24.875, h: 26.125, o: 26.00, c: 25.375, v: 2035200 },
    { date: new Date(1994,3,14), l: 25.125, h: 26.00, o: 25.625, c: 25.75, v: 2468000 },
    { date: new Date(1994,3,15), l: 25.875, h: 26.625, o: 26.125, c: 26.375, v: 4130800 },
    { date: new Date(1994,3,16), l: 26.25, h: 27.375, o: 26.25, c: 27.25, v: 2307600 },
    { date: new Date(1994,3,17), l: 26.875, h: 27.25, o: 27.125, c: 26.875, v: 1979200 },
    { date: new Date(1994,3,18), l: 26.375, h: 27.125, o: 27.00, c: 27.125, v: 2310400 },
    { date: new Date(1994,3,21), l: 26.75, h: 27.875, o: 26.875, c: 27.75, v: 3233600 },
    { date: new Date(1994,3,22), l: 26.75, h: 28.375, o: 27.50, c: 27.00, v: 1174400 },
    { date: new Date(1994,3,23), l: 26.875, h: 28.125, o: 27.00, c: 28.00, v: 1706000 },
    { date: new Date(1994,3,24), l: 26.25, h: 27.875, o: 27.75, c: 27.625, v: 1392800 },
    { date: new Date(1994,3,25), l: 27.50, h: 28.75, o: 27.75, c: 28.00, v: 2134000 },
    { date: new Date(1994,3,28), l: 25.75, h: 28.25, o: 28.00, c: 27.25, v: 1909200 },
    { date: new Date(1994,3,29), l: 26.375, h: 27.50, o: 27.50, c: 26.875, v: 5032000 },
    { date: new Date(1994,3,30), l: 25.75, h: 27.50, o: 26.375, c: 26.25, v: 2323200 },
    { date: new Date(1994,3,31), l: 24.75, h: 27.00, o: 26.50, c: 25.25, v: 2524800 },

    { date: new Date(1994,4,1), l: 24.00, h: 25.00, o: 25.00, c: 24.875, v: 2762800 },
    { date: new Date(1994,4,2), l: 23.625, h: 25.125, o: 24.00, c: 24.875, v: 1467200 },
    { date: new Date(1994,4,3), l: 26.25, h: 28.25, o: 26.75, c: 27.00, v: 2088800 },
    { date: new Date(1994,4,4), l: 26.50, h: 27.875, o: 26.875, c: 27.25, v: 3962800 },
    { date: new Date(1994,4,7), l: 26.375, h: 27.50, o: 27.375, c: 26.75, v: 3544000 },
    { date: new Date(1994,4,8), l: 25.75, h: 26.875, o: 26.75, c: 26.00, v: 2195600 },
    { date: new Date(1994,4,9), l: 25.75, h: 26.75, o: 26.125, c: 26.25, v: 1420400 },
    { date: new Date(1994,4,10), l: 25.75, h: 26.375, o: 26.375, c: 25.875, v: 1656400 },
    { date: new Date(1994,4,11), l: 24.875, h: 26.125, o: 26.00, c: 25.375, v: 2035200 },
    { date: new Date(1994,4,14), l: 25.125, h: 26.00, o: 25.625, c: 25.75, v: 2468000 },
    { date: new Date(1994,4,15), l: 25.875, h: 26.625, o: 26.125, c: 26.375, v: 4130800 },
    { date: new Date(1994,4,16), l: 26.25, h: 27.375, o: 26.25, c: 27.25, v: 2307600 },
    { date: new Date(1994,4,17), l: 26.875, h: 27.25, o: 27.125, c: 26.875, v: 1979200 },
    { date: new Date(1994,4,18), l: 26.375, h: 27.125, o: 27.00, c: 27.125, v: 2310400 },
    { date: new Date(1994,4,21), l: 26.75, h: 27.875, o: 26.875, c: 27.75, v: 3233600 },
    { date: new Date(1994,4,22), l: 26.75, h: 28.375, o: 27.50, c: 27.00, v: 1174400 },
    { date: new Date(1994,4,23), l: 26.875, h: 28.125, o: 27.00, c: 28.00, v: 1706000 },
    { date: new Date(1994,4,24), l: 26.25, h: 27.875, o: 27.75, c: 27.625, v: 1392800 },
    { date: new Date(1994,4,25), l: 27.50, h: 28.75, o: 27.75, c: 28.00, v: 2134000 },
    { date: new Date(1994,4,28), l: 25.75, h: 28.25, o: 28.00, c: 27.25, v: 1909200 }
];

var start = 10,
    end = 30;

var c = chart("#chart", {
	padding : {
		bottom : 60
	},
    axis : [{
        x : {
            type : "block",
            domain : "date",
            hide : true
        },
        y : {
            type : "range",
            domain : [ 20, 30 ],
            step : 5,
            line : true,
            orient : "right"
        },
        area : {
            x : 0,
            y : 0,
            width : "100%",
            height : "45%"
        },
        keymap : {
            low : "l",
            high : "h",
            open : "o",
            close : "c"
        }
    }, {
        x : {
            format : function(d, i) {
                if(end - start < 30 || i % 2 == 0) {
                    return time.format(d, "MM-dd");
                }

                return "";
            },
            hide : false
        },
        y : {
            domain : "v",
            format : function(d) {
                if(d > 10000) {
                    return Math.floor(d / 10000) + "M"
                }

                return d;
            },
            line : false
        },
        area : {
            x : 0,
            y : "50%",
            width : "100%",
            height : "40%"
        },
        extend : 0
    }],
    brush : [{
        type : "candlestick",
        target : [ "l", "h", "o", "c" ],
        axis : 0
    }, {
        type : "column",
        target : "v",
        axis : 1
    }],
    widget : [{
        type : "tooltip",
        brush : 0
    }, {
        type : "zoomscroll",
        key : "c",
        format : function(d, i) {
            return (d.getDate() == 10) ? time.format(d, "yy/MM/dd") : "";
        }
    }],
    event : {
        "zoomscroll.dragend": function(s, e) {
            start = s;
            end = e;
        }
    },
	style : {
		zoomScrollBackgroundSize : 60
	},
    render : false
});

c.axis(0).update(dataSource);
c.axis(0).zoom(start, end);
c.axis(1).update(dataSource);
c.axis(1).zoom(start, end);
c.render(true);
