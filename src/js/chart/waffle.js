const waffleData = [
  { name: 'Item A', value: 11, color: 'steelblue' },
  { name: 'Item B', value: 12, color: 'lightblue' },
  { name: 'Item C', value: 3, color: 'blue' },
  { name: 'Item D', value: 24, color: 'darkblue' },
  { name: 'Item E', value: 15, color: 'green' },
  { name: 'Item F', value: 6, color: 'yellow' },
  { name: 'Item G', value: 7, color: 'orange' },
  { name: 'Item H', value: 22, color: 'red' }
];

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

const waffleChart = d3.select('#waffleChart')
    .selectAll('.square')
    .data(colorRange)
    .enter()
    .append('div')
    .attr('class', 'square')
    .style('background-color', d => d)
    .attr('title', (d, i) => nameRange[i])
    .style('cursor', 'pointer');
