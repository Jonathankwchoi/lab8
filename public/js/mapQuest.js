function initMap() {
	// add your code here
	L.mapquest.key = 'pEmpp2GDBPYSTgS0umMDWQQcAJHgKCdO';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.8787884,-117.2373834],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});
	L.marker([32.8787884,-117.2373834]).addTo(map);
}