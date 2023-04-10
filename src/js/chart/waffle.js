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

  const waffleChart = d3.select(`#${chartId}`)
      .selectAll('.square')
      .data(colorRange)
      .enter()
      .append('div')
      .attr('class', 'square')
      .style('background-color', d => d)
      .attr('title', (d, i) => nameRange[i])
      .style('cursor', 'pointer');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createWaffleChart: createWaffleChart,
  };
}
