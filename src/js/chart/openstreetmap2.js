function createOpenStreetMap(containerId, initialLocation, markersData) {
  // 지도 생성 및 초기 설정
  let map = L.map(containerId).setView(initialLocation, 17); // [위도, 경도], 확대 비율 설정

  // openstreetmap 타일 레이어 추가
  let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  });
  osmLayer.addTo(map);

  // 마커 추가
  markersData.forEach(markerData => {
    let markerLatLng = L.latLng(markerData.location);
    let marker = L.marker(markerLatLng).addTo(map);
    marker.bindPopup(`<b>${markerData.name}</b><br>${markerData.address}`);
  });
}
