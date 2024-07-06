document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('activityChart').getContext('2d');
    const activityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Steps',
                data: [12000, 15000, 11000, 14000, 13000, 16000, 17000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const currentDateElement = document.getElementById('currentDate');
    const currentDayElement = document.getElementById('currentDay');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.innerText = now.toLocaleDateString(undefined, options);
    currentDayElement.innerText = now.toLocaleDateString(undefined, { weekday: 'long' });
});
