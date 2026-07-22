const mapMini = L.map('mapMini', {
    zoomControl: true,
    dragging: true,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    boxZoom: true,
    keyboard: false,
    maxBounds: [
        [-90, -180], 
        [90, 180]    
    ],
    maxBoundsViscosity: 1.0
}).setView([20, 0], 1);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap'
    }
).addTo(mapMini);

fetch("js/SSD.geojson")
  .then(response => response.json())
  .then(data => {

    L.geoJSON(data).addTo(mapMini);

  })
  .catch(error => console.error("Erreur GeoJSON :", error));

fetch("js/TNS.geojson")
  .then(response => response.json())
  .then(data => {

    L.geoJSON(data).addTo(mapMini);

  })
  .catch(error => console.error("Erreur GeoJSON :", error));

var marker1 = L.marker([48.8703, 2.4897]).addTo(mapMini);
marker1.bindPopup(`
    <h3>Expérience Professionnelle 1: Direction de l'Eau et de l'Assainissement de Seine-Saint-Denis (04/2024-09/2024)</h3>
    <p><strong>Mission:</strong>&nbsp;Accessiblité et valorisation du patrimoine d'eau de surface du département dans le cadre de la politique Seine-Saint-Denis, territoire d'eau&nbsp;</p>
    <p><strong>Zone d'étude:</strong>&nbsp;Seine-Saint-Denis (France)</p>
    <p><strong>Lieu de travail:</strong>&nbsp;Rosny-sous-Bois,Seine-Saint-Denis, France</p>
`);
           
var marker2 = L.marker([2.15, 15.80]).addTo(mapMini);
marker2.bindPopup(`
     <h3>Expérience Professionnelle 2: Fondation pour le Tri-National de la Sangha (02/2025-04/2026)</h3>
     <p><strong>Mission: Participation au projet scientifique CAPRO_TNS: ¨Problématique de l'économie cacaoyère à l'interface des aires protégées dans le Tri-National de la Sangha</strong>&nbsp;</p>
     <p><strong>Zone d'étude:</strong>&nbsp;Tri-National de la Sangha (Bassin du Congo)</p>
     <p><strong>Lieux de travail:</strong>&nbsp;</br>-Yaoundé, Mfoundi, Cameroun</br>-Paris, Paris, France</p>
`);

