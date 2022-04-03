const ctx = document.getElementById('timeSeriesChart').getContext('2d');

const startDate = new Date(2020, 0, 1);

const labels = [];
for (let i = 0; i < 6; i++) {
  const date = moment(startDate).add(i, 'days').format('YYYY-MM-DD');
  labels.push(date.toString());
}

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels,
    datasets: [
      {
        label: '#of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
        fill: false,  // true -> to enable the fill color between the line and the x-axis.
        borderColor: 'orange',
      },
    ],
  },
  options: {},
});
