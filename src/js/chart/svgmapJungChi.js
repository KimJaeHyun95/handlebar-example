  const svg = d3.select("svg");

  // 지도 projection을 설정합니다.
  const projection = d3.geoMercator()
          .center([126.9895, 37.5651]) // 중심 좌표
          .scale(80000) // 확대/축소 배율
          .translate([400, 300]); // 화면에서 지도가 그려질 위치

  // d3.geoPath() 함수로 path 생성자를 만듭니다.
  const path = d3.geoPath().projection(projection);

  // GeoJSON 데이터를 불러옵니다.
  d3.json("https://raw.githubusercontent.com/southkorea/seoul-maps/master/kostat/2013/json/seoul_municipalities_geo.json").then((geojson) => {
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
              const color = d3.select(this).style("fill");
              if (color === "rgb(206, 212, 218)") {
                d3.select(this).style("fill", "rgb(255, 0, 0)");
              } else if (color === "rgb(255, 0, 0)") {
                d3.select(this).style("fill", "rgb(0, 0, 255)");
              } else if (color === "rgb(0, 0, 255)") {
                d3.select(this).style("fill", "rgb(206, 212, 218)");
              }
            });
  });
