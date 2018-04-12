function initMap() {
	const centerLatLng = new google.maps.LatLng(50.466554, 30.476847);
	const mapOption = {
		center: centerLatLng,
		zoom: 8
	};
	const map = new google.maps.Map(document.getElementById('map'), mapOption);

}

$(document).ready(() => {

	initMap();
});