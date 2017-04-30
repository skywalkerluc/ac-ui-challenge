function getWebsiteLocationAPI(value) {
	$.ajax({
		type: 'GET',
		url: 'http://freegeoip.net/json/' + value,
		success: function (response) {
			// if (response.city == "") {
			// 	$.ajax(this);
			// }
			$("#map").show();
			getWebsiteLocation(response);
		},
		error: function () {
			$("#map").hide();
			createMessage("Data not found");
			return;
		}
	});
}

var map;
function getWebsiteLocation(data) {
	console.log(data);
	

	var location = { lat: data.latitude, lng: data.longitude };
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});

	google.maps.event.addDomListener(window, 'resize', function () {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	})
}

