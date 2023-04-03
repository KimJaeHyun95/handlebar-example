  // 지도 생성 및 초기 설정
  let map = L.map('map').setView([37.5665, 126.9780], 17); // [위도, 경도], 확대 비율 설정
  // openstreetmap 타일 레이어 추가
  let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  });
  osmLayer.addTo(map);

  // 시청 마커 추가
  let cityhallLatLng = L.latLng(37.5665, 126.9780); // 위도, 경도 좌표
  let cityhallMarker = L.marker(cityhallLatLng).addTo(map);

  // 종로구 통일로 246-20, 107동 마커 추가
  let jongroLatLng = L.latLng(37.5753, 126.9603); // 위도, 경도 좌표
  let jongroMarker = L.marker(jongroLatLng).addTo(map);

  // 팝업 추가
  cityhallMarker.bindPopup("<b>서울시청</b><br>서울특별시 중구 태평로1가 31"); // 마커 클릭시 팝업에 표시될 내용
  jongroMarker.bindPopup("<b>종로구청</b><br>서울특별시 종로구 통일로 246-20, 107동"); // 마커 클릭시 팝업에 표시될 내용
