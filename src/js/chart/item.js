  const nodes = [
    { id: 'A', group: 1 },
    { id: 'B', group: 1 },
    { id: 'C', group: 1 },
    { id: 'D', group: 2 },
    { id: 'E', group: 2 },
    { id: 'F', group: 2 },
    { id: 'G', group: 3 },
    { id: 'H', group: 3 },
    { id: 'I', group: 3 }
  ];

  const links = [
    { source: 'A', target: 'B' },
    { source: 'A', target: 'C' },
    { source: 'B', target: 'C' },
    { source: 'B', target: 'D' },
    { source: 'D', target: 'E' },
    { source: 'D', target: 'F' },
    { source: 'E', target: 'F' },
    { source: 'C', target: 'G' },
    { source: 'G', target: 'H' },
    { source: 'G', target: 'I' },
    { source: 'H', target: 'I' }
  ];

  const width = 800;
  const height = 600;

  // SVG 요소를 생성하고 body에 추가한 다음, 너비와 높이를 설정합니다.
  const svg = d3.select('body')
          .append('svg')
          .attr('width', width)
          .attr('height', height);

  // 노드와 링크를 사용하여 시뮬레이션을 설정합니다.
  // 각 노드 간의 연결, 전체 노드에 작용하는 충전력, 중심 위치를 설정합니다.
  const simulation = d3.forceSimulation(nodes)
          .force('link', d3.forceLink(links).id(d => d.id))
          .force('charge', d3.forceManyBody())
          .force('center', d3.forceCenter(width / 2, height / 2));

  // 링크들을 SVG 요소에 추가하고, 각 링크에 대한 선을 그립니다.
  const link = svg.append('g')
          .attr('class', 'links')
          .selectAll('line')
          .data(links)
          .enter()
          .append('line')
          .attr('class', 'link');

  // 노드들을 SVG 요소에 추가하고, 각 노드에 대한 원을 그립니다.
  // 노드의 색상은 그룹에 따라 결정됩니다.
  // 노드 드래그 이벤트를 처리하기 위한 핸들러를 설정합니다.
  const node = svg.append('g')
          .attr('class', 'nodes')
          .selectAll('circle')
          .data(nodes)
          .enter()
          .append('circle')
          .attr('class', 'node')
          .attr('r', 10)
          .attr('fill', d => d3.schemeCategory10[d.group])
          .call(d3.drag()
                  .on('start', dragstarted)
                  .on('drag', dragged)
                  .on('end', dragended));

  // 각 노드에 제목을 추가하여 마우스 오버 시 노드의 ID를 표시합니다.
  node.append('title')
          .text(d => d.id);

  // 시뮬레이션의 tick 이벤트를 처리하여 노드와 링크의 위치를 업데이트합니다.
  simulation.on('tick', () => {
    link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

    node
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);
  });

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
