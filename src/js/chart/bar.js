function createBarChart(canvasId, chartData) {
// 차트 생성
  let ctx = document.getElementById("barChart");
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}



