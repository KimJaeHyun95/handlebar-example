function createLineChart(canvasId, chartData) {
  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        y: {
          display: true,
          title: {
            display: true,
            text: '# of peoples'
          }
        },
        x: {
          display: true,
          title: {
            display: true,
            text: 'dates'
          }
        }
      }
    }
  };

  const lineChart = new Chart(
      document.getElementById(canvasId),
      config
  );
}





