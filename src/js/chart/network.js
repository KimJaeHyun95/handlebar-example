  const nodes = [
    { id: '코로나19', group: 0, radius: 75 },
    { id: '백신', group: 1, radius: 50 },
    { id: '금리', group: 2, radius: 50 },
    { id: '소상공인', group: 3, radius: 50 },
    { id: '항목1', group: 1, radius: 25 },
    { id: '항목2', group: 1, radius: 25 },
    { id: '항목3', group: 2, radius: 25 },
    { id: '항목4', group: 2, radius: 25 },
    { id: '항목5', group: 3, radius: 25 },
    { id: '항목6', group: 3, radius: 25 }
  ];

  const links = [
    { source: '코로나19', target: '백신' },
    { source: '코로나19', target: '금리' },
    { source: '코로나19', target: '소상공인' },
    { source: '백신', target: '항목1' },
    { source: '백신', target: '항목2' },
    { source: '금리', target: '항목3' },
    { source: '금리', target: '항목4' },
    { source: '소상공인', target: '항목5' },
    { source: '소상공인', target: '항목6' }
  ];

  const width = 800;
  const height = 600;

  const svg = d3.select('body')
          .append('svg')
          .attr('width', width)
          .attr('height', height);

  const simulation = d3.forceSimulation(nodes)
          .force('link', d3.forceLink(links).id(d => d.id).distance(100))
          .force('charge', d3.forceManyBody().strength(-500))
          .force('center', d3.forceCenter(width / 2, height / 2));

  const link = svg.append('g')
          .attr('class', 'links')
          .selectAll('line')
          .data(links)
          .enter()
          .append('line')
          .attr('class', 'link');

  const node = svg.append('g')
          .attr('class', 'nodes')
          .selectAll('circle')
          .data(nodes)
          .enter()
          .append('circle')
          .attr('class', 'node')
          .attr('r', d => d.radius)
          .attr('fill', d => d3.schemeCategory10[d.group]);

  const nodeText = svg.append('g')
          .attr('class', 'node-text')
          .selectAll('text')
          .data(nodes)
          .enter()
          .append('text')
          .attr('font-size', '10px')
          .attr('text-anchor', 'middle')
          .text(d => d.id);

  node.append('title')
          .text(d => d.id);

  simulation.on('tick', () => {
    link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

    node
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);

    nodeText
            .attr('fill', '#fff')
            .attr('font-size', '20px')
            .attr('x', d => d.x)
            .attr('y', d => d.y + 5); // Y 위치를 조정합니다.
  });
