$(function () {
	$('#gop-count').highcharts({
	    /** Fetch live data from published Google spreadsheet */
	    data: {
	    	googleSpreadsheetKey: '1YNdw7r69E9KFXz7mgeRGXeuwJxPAWrmKpJu4QslhBr8'
	    },
	    chart: {
	        type: 'column'
	    },
	    plotOptions: {
       		column: {
           		dataLabels: {
               		enabled: true
               	}
            }
        },
        colors: ["#9b1b28"],
	    title: {
	        text: 'Republican Delegates Won So Far'
	    },
	    subtitle: {
	    	text: '1,237 needed for Republican nomination; 2,340 available'
	    },
	    yAxis: {
	    	title: " ",
	    	labels: {
	    		enabled: false
	    	}
	    },
	    legend: {
	    	enabled: false
	    },
	    credits: {
	    	enabled: true,
	    	text: "Last updated 3/6/16 at 2p. Source: AP"
	    }
	});
});