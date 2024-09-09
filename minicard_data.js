async function fetchData() {
    try {
      const response = await fetch('dummyData_miniCards.txt');
      const text = await response.text();
      const lines = text.split('\n').map(line => line.trim()).filter(line => line);
      const headers = lines[0].split(',');
      return lines.slice(1).map(line => {
        const values = line.split(',');
        return headers.reduce((obj, header, index) => {
          obj[header] = values[index];
          return obj;
        }, {});
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  function generateCards(data) {
    const container = document.getElementById('card-container');
    const platforms = [...new Set(data.map(item => item.platform))];

    platforms.forEach(platform => {
      const column = document.createElement('div');
      column.className = 'column';

      const columnTitle = document.createElement('div');
      columnTitle.className = 'column-title';
      columnTitle.textContent = platform;
      column.appendChild(columnTitle);

      data.filter(item => item.platform === platform).forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        // Assign color based on success rate
        let colorClass;
        const successRate = parseFloat(item.success_rate);
        if (successRate >= 99) {
          colorClass = 'green';
        } else if (successRate >= 96 && successRate < 98.9) {
          colorClass = 'blue';
        } else if (successRate >= 95) {
          colorClass = 'yellow';
        } else {
          colorClass = 'red';
        }
        card.classList.add(colorClass);

        const cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';
        cardTitle.textContent = `${item.job_name} - ${item.success_rate}%`;
        card.appendChild(cardTitle);

        const cardText = document.createElement('div');
        cardText.className = 'card-text';
        cardText.innerHTML = `🧪 ${item.failed_tests} of ${item.total_tests} tests failing, ${item.skipped_tests} skipped with duration: <strong>${item.duration}m</strong>`;
        card.appendChild(cardText);

        column.appendChild(card);
      });

      container.appendChild(column);
    });
  }

  // Fetch data and generate cards on page load
  window.onload = async () => {
    const data = await fetchData();
    generateCards(data);
  };