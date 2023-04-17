function createWaffleChart(chartId, waffleData) {
  const valueSum = waffleData.reduce((sum, d) => sum + d.value, 0);
  const proportions = waffleData.map(d => d.value / valueSum);

  let colorRange = [];
  let nameRange = [];
  waffleData.forEach((data, index) => {
    const rangeSize = Math.floor(proportions[index] * 100);
    for (let i = 0; i < rangeSize; i++) {
      colorRange.push(data.color);
      nameRange.push(data.name);
    }
  });

  const tooltip = d3.select("#waffle-tooltip")

  const waffleChart = d3.select(`#${chartId}`)
      .selectAll('.square')
      .data(colorRange)
      .enter()
      .append('div')
      .attr('class', 'square')
      .style('background-color', d => d)
      .attr('title', (d, i) => nameRange[i])
      .style('cursor', 'pointer')
      .on('mouseover', function (d, i) {
        tooltip.style("display", "inline");
        tooltip.text(nameRange[i]);
      })
      .on('mousemove', function () {
        tooltip.style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY + 10) + "px");
      })
      .on('mouseout', function () {
        tooltip.style("display", "none");
      });
}
