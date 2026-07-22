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

L.marker([48.8703, 2.4897]).addTo(mapMini);
marker.bindPopup(`
    <h3>Direction de l'Eau et de l'Assainissement de Seine-Saint-Denis (04/2024-09/2024)</h3></br>
    <p><strong>Mission: Accessiblité et valorisation du patrimoine d'eau de surface du département dans le cadre de la politique Seine-Saint-Denis, territoire d'eau</strong>&nbsp; </p></br>
    <p><strong>Zone d'étude:</strong>&nbsp;Seine-Saint-Denis (France)</p></br>
    <p><strong>Lieu de travail:</strong>&nbsp;Rosny-sous-Bois,Seine-Saint-Denis(93)</p></br>
`);
           
L.marker([2.15, 15.80]).addTo(mapMini);
marker.bindPopup(`
     <h3>Fondation pour le Tri-National de la Sangha (02/2025-04/2026)</h3></br>
     <p><strong>Mission: Participation au projet scientifique CAPRO_TNS: ¨Problématique de l'économie cacaoyère à l'interface des aires protégées dans le Tri-National de la Sangha</strong>&nbsp; </p></br>
     <p><strong>Zone d'étude:</strong>&nbsp;Tri-National de la Sangha (Bassin du Congo)</p></br>
     <p><strong>Lieux de travail:</strong>&nbsp;Yaoundé, Mfoundi, Cameroun; Paris, Paris, France </p></br>
`);

