function createPieChart(canvasId, chartData) {
  // 차트 생성
  let ctx = document.getElementById(canvasId);
  const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

