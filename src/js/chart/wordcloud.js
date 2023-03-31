  // Sample data
  const words = [
    {text: "드라마", size: 150},
    {text: "예능", size: 120},
    {text: "뉴스", size: 75},
    {text: "스포츠", size: 60},
    {text: "오늘의 날씨", size: 60},
    {text: "금융", size: 60},
    {text: "패션", size: 60},
    {text: "커피", size: 60},
    {text: "맥주", size: 60},
    {text: "음식", size: 55},
    {text: "유튜브", size: 55},
    {text: "배달 음식", size: 55},
    {text: "쿠팡", size: 45},
    {text: "중고나라", size: 45},
    {text: "자격증", size: 45},
    {text: "일자리", size: 45},
    {text: "전기차", size: 45},
    {text: "산책로", size: 45},
    {text: "바람과 구름과 비", size: 35},
    {text: "신입생 대학 생활", size: 35},
  ];

  const wc_width = 800;
  const wc_height = 600;

  // Create a word cloud layout
  const layout = d3.layout.cloud()
          .size([wc_width, wc_height])
          .words(words)
          .padding(5)
          .rotate(() => ~~(Math.random() * 2) * 90)
          .fontSize(d => d.size)
          .on("end", draw);

  layout.start();

  function draw(words) {
    // Create an SVG element
    const svg = d3.select("body").append("svg")
        .attr("width", wc_width)
        .attr("height", wc_height);

// Add words to the word cloud
    svg.append("g")
        .attr("transform", `translate(${wc_width / 2}, ${wc_height / 2})`)
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", d => `${d.size}px`)
        .style("fill", (d, i) => d3.schemeCategory10[i % 10])
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
        .text(d => d.text)
        .on("click", d =>
            console.log(d.srcElement.__data__.text)
        );
  }
