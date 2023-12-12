import Chart from 'chart.js/auto';
function fetchData() {
    const sampleData = [
        { country: 'Country A', divorceRate: 2.5 },
        { country: 'Country B', divorceRate: 3.7 },
        { country: 'Country C', divorceRate: 1.8 },
    ];
console.log('number1');
    // Display the data
    displayData(sampleData);
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
console.log('number2');
    // Clear previous data
    dataContainer.innerHTML = '';

    // Extract labels and values from the data
    const labels = data.map(item => item.country);
    const values = data.map(item => item.divorceRate);

    // Create a canvas element to render the chart
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    dataContainer.appendChild(canvas);

    // Get 2D rendering context for the canvas
    const ctx = canvas.getContext('2d');

    // Create a bar chart
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Divorce Rates by Country',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
}

document.addEventListener('DOMContentLoaded', function () {
    fetchData(); // Call fetchData when the DOM is loaded
});
