 // Example data sets (you would replace this with your actual data)
 const datasets = [
    'dataset1.txt',
    'dataset2.txt',
    'dataset3.txt'
];

// Populate the dropdown with options
const dropdown = document.getElementById('dataset-select');
datasets.forEach(dataset => {
    const option = document.createElement('option');
    option.value = dataset;
    option.textContent = dataset;
    dropdown.appendChild(option);
});

// Handle dropdown selection (optional)
dropdown.addEventListener('change', function() {
    const selectedDataset = this.value;
    // You can handle the selection here, e.g., load the selected dataset
    console.log(`Selected dataset: ${selectedDataset}`);
});