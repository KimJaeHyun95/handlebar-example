function createWordCloud(containerId, words) {
  const wc_width = 800;
  const wc_height = 600;
  // Create a word cloud layout
  const layout = d3
      .layout
      .cloud()
      .size([wc_width, wc_height])
      .words(words)
      .padding(5)
      .rotate(() => ~~ (Math.random() * 2) * 90)
      .fontSize(d => d.size)
      .on("end", draw);
  layout.start();

  // draw 함수는 createWordCloud 함수 내부에 정의되어 있습니다.
  // 이렇게 함으로써 draw 함수는 createWordCloud 함수의 매개변수와 지역 변수에 접근할 수 있습니다.
  // 또한, 코드를 구조화하고 재사용하기 쉽게 만듭니다.
  // 이러한 패턴은 D3.js와 같은 라이브러리에서 종종 사용됩니다.
  function draw(words) { // Create an SVG element
    const svg = d3
        .select(`#${containerId}`)
        .append("svg")
        .attr("width", wc_width)
        .attr("height", wc_height);
    // Add words to the word cloud
    svg
        .append("g")
        .attr(
            "transform",
            `translate(${
                wc_width / 2
            }, ${
                wc_height / 2
            })`
        )
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", d => `${
            d.size
        }px`)
        .style("fill", (d, i) => d3.schemeCategory10[i % 10])
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${
            [d.x, d.y]
        })rotate(${
            d.rotate
        })`)
        .text(d => d.text)
        .on("click", d => console.log(d
            .srcElement
            .__data__
            .text));
  }
}
