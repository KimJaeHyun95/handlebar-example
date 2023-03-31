
  const labels = [1,2,3,4,5];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Cases',
      backgroundColor: 'rgb(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      data: [234, 32,76,45,123],
    },
      {
        label: 'Deaths',
        backgroundColor: 'rgb(0, 99, 132, 0.2)',
        borderColor: 'rgb(0, 99, 132)',
        data: [45,123,87,34,1],
      }]
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
          document.getElementById('lineChart'),
          config
  );
