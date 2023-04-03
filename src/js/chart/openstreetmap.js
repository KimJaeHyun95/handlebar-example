  // 지도 생성 및 초기 설정
  let map = L.map('map').setView([37.5665, 126.9780], 11);

  // openstreetmap 타일 레이어 추가
  let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  });
  osmLayer.addTo(map);

  // 서울시 시군구 경계 레이어 추가
  let seoulBoundaries = L.geoJSON(null, {
    style: {
      color: 'red', // 경계 색상
      weight: 2,
      fillOpacity: 0, // 경계 내부 색상 없애기
    }
  });

  seoulBoundaries.addTo(map);
  fetch('https://raw.githubusercontent.com/southkorea/seoul-maps/master/kostat/2013/json/seoul_municipalities_geo_simple.json')
          .then(response => response.json())
          .then(data => {
            seoulBoundaries.addData(data);
          });
