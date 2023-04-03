const myDiv = document.getElementById("myDiv");
const value = myDiv.getAttribute("data-value");

async function requestData() {
  let result = 0;
  await axios.post('http://localhost:8080/api/v1/external/test1', {})
      .then(function (response) {
        console.log(response.data);
        result = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

  return result
}

const arr = [1, 1, 2, 3, 3, 3, 4, 5, 5];
console.log(arr)
const uniqueArr = _.uniq(arr);
console.log(uniqueArr); // [1, 2, 3, 4, 5]

// 차트 생성
let ctx = document.getElementById("barChart");
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
