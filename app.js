const mess1Data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'Food Wastage (kg)',
        data: [223, 250, 241, 239, 236, 252, 252],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const mess2Data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'Food Wastage (kg)',
        data: [165, 151, 163, 152, 170, 175, 157],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const mess1Ctx = document.getElementById('mess1Chart').getContext('2d');
const mess2Ctx = document.getElementById('mess2Chart').getContext('2d');

const mess1Chart = new Chart(mess1Ctx, {
    type: 'bar',
    data: mess1Data,
    options: chartOptions
});
const mess2Chart = new Chart(mess2Ctx, {
    type: 'bar',
    data: mess2Data,
    options: chartOptions
});
// Add this section at the end of the file
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
