$(function () {
    $('#gop-drilldown-x2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Delegates Committed to the Republican Presidential Candidates'
        },
        subtitle: {
            text: "<b>1,237 needed for nomination of the 2,340 available.</b><br/>Click each column to view the candidate's count by month and by state."
        },
        colors: ['#ff5c5c', '#ea372e', '#c5251e', '#9a1f1b', '#701c1c'],
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total Delegates Won'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
        },
        /** Level 1: Total delegates won per candidate */
        series: [{
            name: 'Candidate',
            colorByPoint: true,
            data: [{
                name: 'Ben Carson',
                y: 7,
                drilldown: 'carson-months'
            }, {
                name: 'Ted Cruz',
                y: 300,
                drilldown: 'cruz-months'
            }, {
            	name: 'John Kasich',
            	y: 35,
            	drilldown: 'kasich-months'
            }, {
            	name: 'Marco Rubio',
            	y: 128,
            	drilldown: 'rubio-months'
            }, {
            	name: 'Donald Trump',
            	y: 382,
            	drilldown: 'trump-months'
            }]
        }],
        /** Drilldown two levels: first months, then states for each above candidate in the series */
        drilldown: {
            series: [{
                name: 'Ben Carson',
                id: 'carson-months',
                data: [{
                	name: 'February',
                	y: 4,
                	drilldown: 'carson-feb'
                }, {
                	name: 'Super Tuesday',
                	y: 3,
                	drilldown: 'carson-tues'
                }]
            }, {
            	name: 'Ted Cruz',
            	id: 'cruz-months',
            	data: [{
            		name: 'February',
            		y: 17,
            		drilldown: 'cruz-feb'
            	}, {
            		name: 'Super Tuesday',
            		y: 214,
            		drilldown: 'cruz-tues'
            	}, {
                    name: 'March',
                    y: 69,
                    drilldown: 'cruz-mar'
                }]
            }, {
            	name: 'John Kasich',
            	id: 'kasich-months',
            	data: [{
            		name: 'February',
            		y: 6,
            		drilldown: 'kasich-feb'
            	}, {
            		name: 'Super Tuesday',
            		y: 19,
            		drilldown: 'kasich-tues'
            	}, {
                    name: 'March',
                    y: 10,
                    drilldown: 'kasich-mar'
                }]
            }, {
            	name: 'Marco Rubio',
            	id: 'rubio-months',
            	data: [{
            		name: 'February',
            		y: 16,
            		drilldown: 'rubio-feb'
            	}, {
            		name: 'Super Tuesday',
            		y: 94,
            		drilldown: 'rubio-tues'
            	}, {
                    name: 'March',
                    y: 18,
                    drilldown: 'rubio-mar' 
                }]
            }, {
            	name: 'Donald Trump',
            	id: 'trump-months',
            	data: [{
            		name: 'February',
            		y: 82,
            		drilldown: 'trump-feb'
            	}, {
            		name: 'Super Tuesday',
            		y: 247,
            		drilldown: 'trump-tues'
            	}, {
                    name: 'March',
                    y: 53,
                    drilldown: 'trump-mar'
                }]
            }, {
            	name: 'Ben Carson - February',
            	id: 'carson-feb',
            	data: [
                	[ 'IA', 3 ],
                   	[ 'NH', 0 ],
                    [ 'SC', 0 ],
                    [ 'NA', 1 ]
            	]
            }, {
            	name: 'Ben Carson - Super Tuesday',
            	id: 'carson-tues',
            	data: [
					[ 'AL', 0 ],
					[ 'AK', 0 ],
                    [ 'AR', 0 ],
                    [ 'GA', 0 ],
                    [ 'MA', 0 ],
                    [ 'MN', 0 ],
                    [ 'OK', 0 ],
                    [ 'TN', 0 ],
                    [ 'TX', 0 ],
                    [ 'VT', 0 ],
                    [ 'VA', 3 ]
            	]
            }, {
            	name: 'Ted Cruz - February',
            	id: 'cruz-feb',
            	data: [
                	[ 'IA*', 8 ],
                   	[ 'NH', 3 ],
                    [ 'SC', 0 ],
                    [ 'NA', 6 ]
            	]
            }, {
            	name: 'Ted Cruz - Super Tuesday',
            	id: 'cruz-tues',
            	data: [
					[ 'AL', 13 ],
					[ 'AK*', 12 ],
                    [ 'AR', 14 ],
                    [ 'GA', 18 ],
                    [ 'MA', 4 ],
                    [ 'MN', 13 ],
                    [ 'OK*', 15 ],
                    [ 'TN', 15 ],
                    [ 'TX*', 102 ],
                    [ 'VT', 0 ],
                    [ 'VA', 8 ]
            	]
            }, {
                name: 'Ted Cruz - March',
                id: 'cruz-mar',
                data: [
                    [ 'KS*', 24 ],
                    [ 'KY', 15 ],
                    [ 'LA', 18 ],
                    [ 'ME*', 12 ]
                ]
            }, {
            	name: 'John Kasich - February',
            	id: 'kasich-feb',
            	data: [
                	[ 'IA', 1 ],
                   	[ 'NH', 4 ],
                    [ 'SC', 0 ],
                    [ 'NA', 1 ]
            	]
            }, {
            	name: 'John Kasich - Super Tuesday',
            	id: 'kasich-tues',
            	data: [
            		[ 'AL', 0 ],
					[ 'AK', 0 ],
                    [ 'AR', 0 ],
                    [ 'GA', 0 ],
                    [ 'MA', 8 ],
                    [ 'MN', 0 ],
                    [ 'OK', 0 ],
                    [ 'TN', 0 ],
                    [ 'TX', 0 ],
                    [ 'VT', 6 ],
                    [ 'VA', 5 ]
            	]
            }, {
                name: 'John Kasich - March',
                id: 'kasich-mar',
                data: [
                    [ 'KS', 1 ],
                    [ 'KY', 7 ],
                    [ 'LA', 0 ],
                    [ 'ME', 2 ]
                ]
            }, {
            	name: 'Marco Rubio - February',
            	id: 'rubio-feb',
            	data: [
                	[ 'IA', 7 ],
                   	[ 'NH', 2 ],
                    [ 'SC', 0 ],
                    [ 'NA', 7 ]
            	]
            }, {
            	name: 'Marco Rubio - Super Tuesday',
            	id: 'rubio-tues',
            	data: [
            		[ 'AL', 1 ],
					[ 'AK', 5 ],
                    [ 'AR', 9 ],
                    [ 'GA', 14 ],
                    [ 'MA', 8 ],
                    [ 'MN*', 14 ],
                    [ 'OK', 11 ],
                    [ 'TN', 9 ],
                    [ 'TX', 3 ],
                    [ 'VT', 0 ],
                    [ 'VA', 16 ]
            	]
            }, {
                name: 'Marco Rubio - March',
                id: 'rubio-mar',
                data: [
                    [ 'KS', 6 ],
                    [ 'KY', 7 ],
                    [ 'LA', 5 ],
                    [ 'ME', 0 ]
                ]
            }, {
            	name: 'Donald Trump - February',
            	id: 'trump-feb',
            	data: [
            		[ 'IA', 7 ],
                   	[ 'NH*', 11 ],
                    [ 'SC*', 50 ],
                    [ 'NA*', 14 ]
            	]
            }, {
            	name: 'Donald Trump - Super Tuesday',
            	id: 'trump-tues',
            	data: [
            		[ 'AL*', 36 ],
					[ 'AK', 11 ],
                    [ 'AR*', 16 ],
                    [ 'GA*', 40 ],
                    [ 'MA*', 22 ],
                    [ 'MN', 8 ],
                    [ 'OK', 13 ],
                    [ 'TN*', 31 ],
                    [ 'TX', 47 ],
                    [ 'VT*', 6 ],
                    [ 'VA', 17 ]
            	]
            }, {
                name: 'Donald Trump - March',
                id: 'trump-mar',
                data: [
                    [ 'KS', 9 ],
                    [ 'KY*', 17 ],
                    [ 'LA*', 18 ],
                    [ 'ME', 9 ]
                ]
            }]
        },
        credits: {
        	enabled: true,
        	text: "*State won by selected candidate. Source: AP. Updated 3/6/16 at 2p."
        }
    });
});