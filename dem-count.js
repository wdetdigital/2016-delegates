$(function () {
	$('#dem-count').highcharts({
	    /** Fetch live data from published Google spreadsheet */
	    data: {
	    	googleSpreadsheetKey: '1Ccq5qoa8crZ_qm-r7JFCrfeSGzNFApnQ4dI6-uAxpeg'
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
      	colors: ["#0f2445"],
	    title: {
	        text: 'Democratic Delegates Won So Far'
	    },
	    subtitle: {
	    	text: '2,383 needed for Democratic nomination; 4,189 available'
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