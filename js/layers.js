var map = new L.Map('map', {keyboard: true, attributionControl: true, zoom: 10, center: [59.98,10.572]});

map.attributionControl.setPrefix(""); // Fjerner powered by Leaflet

var skikart = new L.TileLayer("http://kart{s}.turkompisen.no/cgi-bin/tilecache.cgi/1.0.0/skikart/{z}/{x}/{y}.png", {
	attribution: '© <a href="http://www.openstreetmap.org" target="_new">OpenStreetMap</a>-bidragsytere og <a href="http://www.skogoglandskap.no" target="_new">Skog og Landskap</a>', 
	subdomains: ["1", "2", "3", "4"],
	//scheme: "tms",
	maxZoom: 18
});

var turkart = new L.TileLayer("http://kart{s}.turkompisen.no/cgi-bin/tilecache.cgi/1.0.0/turkart/{z}/{x}/{y}.png", {
	attribution: '© <a href="http://www.openstreetmap.org" target="_new">OpenStreetMap</a>-bidragsytere og <a href="http://www.skogoglandskap.no" target="_new">Skog og Landskap</a>', 
	subdomains: ["1", "2", "3", "4"],
	//scheme: "tms",
	maxZoom: 18
});

map.addLayer(turkart);

var baseMaps = {
    "Turkart": turkart,
    "Skikart": skikart
};
L.control.layers(baseMaps).addTo(map);
