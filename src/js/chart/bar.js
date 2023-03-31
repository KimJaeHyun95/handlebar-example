// 차트 생성
var ctx = document.getElementById("barChart");
const barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "Sales1",
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.6)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [65, 59, 80, 81, 56, 55]
    },
      {
        label: "Sales2",
        backgroundColor: "rgba(192,192,75,0.4)",
        borderColor: "rgba(192,192,75,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [56, 34, 87, 123, 34, 12]
      },
      {
        label: "Sales3",
        backgroundColor: "rgba(192,75,192,0.4)",
        borderColor: "rgba(192,75,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [56, 90, 89, 81, 12, 132]
      }]
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