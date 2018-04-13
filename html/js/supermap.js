let map = {};
let markerCoords = {};
let marker = {};
function initMap() {
	const centerLatLng = new google.maps.LatLng(50.466554, 30.476847);
	const mapOption = {
		center: centerLatLng,
		zoom: 8
	};
	map = new google.maps.Map(document.getElementById('map'), mapOption);
	

}
function initialize(){
	let input = document.getElementById('autocomplete');
	let options = {componentRestrictions: {country: 'ua'}};

	const autocomplete = new google.maps.places.Autocomplete(input, options);
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		let place = autocomplete.getPlace();
		//console.log(place);
		const lat = place.geometry.location.lat();
		const lng = place.geometry.location.lng();

		markerCoords = new google.maps.LatLng(lat, lng);

	});
}


$(document).ready(() => {

	initMap();
	initialize();

	$('.show').on('click', (event) => {
		event.preventDefault();
		if(!$.isEmptyObject(marker)){
			marker.setMap(null);
		}
		marker = new google.maps.Marker({
			position: markerCoords,
			map: map
		});
		map.setCenter(markerCoords);
		//marker.setMap(map);
	});
});
