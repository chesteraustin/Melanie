$(document).ready(function () {
	//check if URL has queryString
	var currentURL = document.URL;
	if (currentURL.indexOf('?') > -1 ) {
		//has query string
		var currentURL = document.URL;
		var queryParam = currentURL.split('?');
		var pumpID = queryParam[1].split('&')[0].split('=')[1];
		var act = queryParam[1].split('&')[1].split('=')[1];
		getRecord(pumpID);
	}
	else {
		//doesn't have query string
	}
	$("#newEntry").hide();
	$("#goToReport").show();
	$("#errorSave").hide();

	$('#submit').on( 'click', function () {
		submitEntry();
	});

	$("#leftSide, #rightSide").on('change', function(){
		pumpTotal();
	});

	$('#newEntry').on( 'click', function () {
		$(".formEntry").trigger("reset");
		$("#newEntry").hide();
		$("#goToReport").show();
	});	
})

function submitEntry() {
	var pumpDate = $("#pumpDate").val();
	var pumpTime = $("#pumpTime").val();
	var pumpUnit = $("#pumpUnit").val();
	var leftSide = $("#leftSide").val();
	var rightSide = $("#rightSide").val();
	var storageLocation = $("#storageLocation").val();

	$.ajax({
		type: "post",
		url: "http://www.chesteraustin.us/cfc/pumpEntry.cfc",
		data: {
			method: "insert",
			pumpDate: pumpDate,
			pumpTime: pumpTime,
			pumpUnit: pumpUnit,
			leftSide: leftSide,
			rightSide: rightSide,
			storageLocation: storageLocation,
			username: "username"
			},
		success: function(response) {
			$("#newEntry").show();
			$("#goToReport").show();
		},
		error: function(resonpose) {
			$("#errorSave").show();
		}
	});	
}

function pumpTotal() {
	var leftSide = $("#leftSide").val();
	var rightSide = $("#rightSide").val();
	
	var pumpTotal = +leftSide + +rightSide;
	
	$("#pumpTotal").val(pumpTotal);
}

function getRecord(pumpID) {
	$.ajax({
		type: "get",
		url: "http://www.chesteraustin.us/cfc/pumpReport.cfc?returnFormat=JSON",
		dataType: "JSON",
		data: {
			method: "generalSearch",
			pumpID: pumpID
			},
		success: function(response) {
				var pumpID = response.DATA[0][0];
				var pumpDate = response.DATA[0][1];
				var pumpTime = response.DATA[0][2];
				var pumpTotal = response.DATA[0][3];
				var pumpUnit = response.DATA[0][4];
				var leftSide = response.DATA[0][5];
				var rightSide = response.DATA[0][6];
				var storageLocation = response.DATA[0][7];
				var username = response.DATA[0][8];

				$("#pumpDate").val(pumpDate);
				$("#pumpTime").val(pumpTime);
				$("#pumpTotal").val(pumpTotal);
				$("#pumpUnit").val(pumpUnit);
				$("#leftSide").val(leftSide);
				$("#rightSide").val(rightSide);
				$("#storageLocation").val(storageLocation);
		},
		error: function(resonpose) {
			console.log("AJAX failed")			
		}
	});
}