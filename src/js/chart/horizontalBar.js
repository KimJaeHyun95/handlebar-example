
  // 차트 생성
  let ctx = document.getElementById("barChart");
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: "Sales",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 55]
      }]
    },
    options: {
      indexAxis: 'y', //수평차트 만들기
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
