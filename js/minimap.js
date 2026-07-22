const mapMini = L.map('mapMini', {
    zoomControl: true,
    dragging: true,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    boxZoom: true,
    keyboard: false
}).setView([20, 0], 1);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap'
    }
).addTo(mapMini);

L.marker([48.8703, 2.4897]).addTo(mapMini);
L.marker([2.15, 15.80]).addTo(mapMini);
