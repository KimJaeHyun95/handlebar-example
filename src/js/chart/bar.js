function createBarChart(canvasId, chartData) {
// 차트 생성
  let ctx = document.getElementById(canvasId);
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets
    },
    options: {
      plugins: {
      },
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

function createHorizontalBarChart(canvasId, chartData) {
// 차트 생성
  let ctx = document.getElementById("barChart");
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets,
    },
    options: {
      plugins: {
      },
      indexAxis: 'y', //수평차트 만들기
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero:true
          }
        }],
      }
    }
  });
}

function createStavkedBarChart(canvasId, chartData) {
// 차트 생성
  let ctx = document.getElementById(canvasId);
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets
    },
    options: {
      plugins: {
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  });
}




