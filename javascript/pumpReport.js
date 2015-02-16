-$(document).ready(function () {
	getRecords();
})

function getRecords() {
	$.ajax({
		type: "get",
		url: "http://www.chesteraustin.us/cfc/pumpReport.cfc?returnFormat=JSON",
		dataType: "JSON",
		data: {
			method: "generalSearch"
			},
		success: function(response) {
			//Row
			for (i = 0; i < response.DATA.length; i++) {
				var pumpID = response.DATA[i][0];
				var pumpDate = response.DATA[i][1];
				var pumpTime = response.DATA[i][2];
				var pumpTotal = response.DATA[i][3];
				var pumpUnit = response.DATA[i][4];
				var leftSide = response.DATA[i][5];
				var rightSide = response.DATA[i][6];
				var storageLocation = response.DATA[i][7];

				var newRow = "";
				newRow = "<tr id=" + pumpID + ">"
							+"<td>" + pumpDate +"</td>"
							+"<td>" + pumpTime +"</td>"
							+"<td>" + leftSide +"</td>"
							+"<td>" + rightSide +"</td>"
							+"<td>" + pumpTotal +"</td>"
							+"<td>" + pumpUnit +"</td>"
							+"<td>" + storageLocation +"</td>"
							
							+"<td>"  
								+"<a href='pumpEntry.html?pumpID=" + pumpID + "&act=edit'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></a>"
								+"<a href='pumpEntry.html?pumpID=" + pumpID + "&act=delete'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></a>"
							+"</td>"
						+"</tr>";

				$("#pumpReportTable thead").append(newRow);
			}
		},
		error: function(resonpose) {
			console.log("AJAX failed")			
		}
	});
	$('.editRecord').on( 'click', function () {
		var thisID = (this.id)
		console.log(thisID);
	})
}

function showWindow() {
	$('#addEntryContainer').modal();
}

function formatDate(date) {
	 var formattedDate = date;
	console.log(formattedDate);
	console.log(date);
	return date
//	return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
}