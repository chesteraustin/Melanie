$(document).ready(function () {
	$("#addDevice").hide;

	checkDevice();
	$("#addDeviceBtn").click(function(){
		addDevice();
	});
})

function checkDevice() {
	$.ajax({
		type: "get",
		url: "http://www.chesteraustin.us/cfc/users.cfc?returnFormat=JSON",
		dataType: "JSON",
		data: {
			method: "search"
			},
		success: function(response) {
			if (response.DATA.length == 0) {
				$("#addDevice").show();
			}
			else {
				console.log("has user");				
			}
		},
		error: function(resonpose) {
			console.log("AJAX failed")			
		}
	});
}

function addDevice() {
	var username = $("#username").val();
	var role = $("#role").val();
	$.ajax({
		type: "post",
		url: "http://www.chesteraustin.us/cfc/users.cfc?returnFormat=JSON",
		dataType: "JSON",
		data: {
			method: "insert",
			username: username,
			role: role
			},
		success: function(response) {
			console.log("Device Added")
		},
		error: function(resonpose) {
			console.log("AJAX failed")			
		}
	});
}