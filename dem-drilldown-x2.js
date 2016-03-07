$(function () {
	$('#dem-drilldown-x2').highcharts({
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: 'Delegates Committed to the Democratic Presidential Candidates'
	    },
	    subtitle: {
	        text: "<b>2,383 needed for nomination of the 4,189 available.</b><br/>Click each column to view the candidate's count by month and by state."
	    },
	    colors: ['#1d239d','#0f2445'],
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
	            name: 'Hillary Clinton',
	            y: 666,
	            drilldown: 'clinton-months'
	        }, {
	            name: 'Bernie Sanders',
	            y: 472,
	            drilldown: 'sanders-months'
	        }]
	    }],
	    /** Drilldown two levels: first months, then states for each above candidate in the series */
	    drilldown: {
	        series: [{
	            name: 'Hillary Clinton',
	            id: 'clinton-months',
	            data: [{
	            	name: 'February',
	            	y: 91,
	            	drilldown: 'clinton-feb'
	            }, {
	            	name: 'Super Tuesday',
	            	y: 513,
	            	drilldown: 'clinton-tues'
	            }, {
	            	name: 'March',
	            	y: 62,
	            	drilldown: 'clinton-mar'
	            }]
	        }, {
	        	name: 'Bernie Sanders',
	        	id: 'sanders-months',
	        	data: [{
	        		name: 'February',
	        		y: 65,
	        		drilldown: 'sanders-feb'
	        	}, {
	        		name: 'Super Tuesday',
	        		y: 343,
	        		drilldown: 'sanders-tues'
	        	}, {
	        		name: 'March',
	        		y: 64,
	        		drilldown: 'sanders-mar'
	        	}]
	        }, {
	        	name: 'Hillary Clinton - February',
	        	id: 'clinton-feb',
	        	data: [
	            	[ 'IA*', 23 ],
	               	[ 'NH', 9 ],
	                [ 'NA*', 20 ],
	                [ 'SC*', 39 ]
	        	]
	        }, {
	        	name: 'Hillary Clinton - Super Tuesday',
	        	id: 'clinton-tues',
	        	data: [
	        		[ 'AL*', 44 ],
	                [ 'AR*', 22] ,
	                [ 'CO', 28],
	                [ 'GA*', 72],
	                [ 'MA*', 46],
	                [ 'MN', 31],
	                [ 'OK', 17],
	                [ 'TN*', 44],
	                [ 'TX*', 147],
	                [ 'VT', 0],
	                [ 'VA*', 62]
	        	]
	        }, {
	        	name: 'Hillary Clinton - March',
	        	id: 'clinton-mar',
	        	data: [
	        		['KS', 10],
	        		['LA*', 35],
	        		['NE', 10],
	        		['ME', 7]
	        	]
	        }, {
	        	name: 'Bernie Sanders - February',
	        	id: 'sanders-feb',
	        	data: [
	        		[ 'IA', 21 ],
	                [ 'NH*', 15 ],
	                [ 'NA', 15 ],
	                [ 'SC', 14 ]
	        	]
	        }, {
	        	name: 'Bernie Sanders - Super Tuesday',
	        	id: 'sanders-tues',
	        	data: [
	        		[ 'AL', 9],
	                [ 'AR', 10],
	                [ 'CO*', 38],
	                [ 'GA', 28],
	                [ 'MA', 45],
	                [ 'MN*', 46],
	                [ 'OK*', 21],
	                [ 'TN', 23],
	                [ 'TX', 74],
	                [ 'VT*', 16],
	                [ 'VA', 33]
	        	]
	        }, {
	        	name: 'Bernie Sanders - March',
	        	id: 'sanders-mar',
	        	data: [
	        		['KS*', 23],
	        		['LA', 12],
	        		['NE*', 14],
	        		['ME*', 15]
	        	]
	        }]
	    },
	    credits: {
	    	enabled: true,
	    	text: "*State won by selected candidate. Source: AP. Updated 3/7/16 at 8a."
	    }
	});
});