  const svg = d3.select("svg");

  // 대한민국 지도 projection을 설정합니다.
  const projection = d3.geoMercator()
          .center([128, 36.5]) // 중심 좌표
          .scale(8000) // 확대/축소 배율
          .translate([800, 600]); // 화면에서 지도가 그려질 위치

  // d3.geoPath() 함수로 path 생성자를 만듭니다.
  const path = d3.geoPath().projection(projection);

  // GeoJSON 데이터를 불러옵니다.
  d3.json("https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2013/json/skorea_provinces_geo_simple.json").then((geojson) => {
    // GeoJSON 데이터를 svg 요소에 추가합니다.
    svg.selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", "#ced4da")
            .style("stroke", "#fff")
            .style("stroke-width", "0.5px")
            .on("click", function(d) {
              // 클릭된 지역을 제외한 모든 지역을 원래 색상으로 변경합니다.
              svg.selectAll("path")
                      .style("fill", "#ced4da");
              // 클릭된 지역의 색상을 변경합니다.
              d3.select(this).style("fill", "red");
            });
  });
