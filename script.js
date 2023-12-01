function fetchData() {
    const sampleData = [
        { country: 'Country A', divorceRate: 2.5 },
        { country: 'Country B', divorceRate: 3.7 },
        { country: 'Country C', divorceRate: 1.8 },
    ];

    // Display the data
    displayData(sampleData);
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');

    // Clear previous data
    dataContainer.innerHTML = '';

    // Create a table to display the data
    const table = document.createElement('table');
    table.border = '1';

    // Create table header
    const headerRow = table.insertRow();
    const countryHeader = headerRow.insertCell(0);
    const rateHeader = headerRow.insertCell(1);
    countryHeader.innerHTML = '<b>Country</b>';
    rateHeader.innerHTML = '<b>Divorce Rate</b>';

    // Create table rows
    data.forEach(item => {
        const row = table.insertRow();
        const countryCell = row.insertCell(0);
        const rateCell = row.insertCell(1);
        countryCell.innerHTML = item.country;
        rateCell.innerHTML = item.divorceRate;
    });

    // Append the table to the data container
    dataContainer.appendChild(table);
}