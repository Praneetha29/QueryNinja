
import React from 'react';

import '../styles/ExportButton.css';

function ExportButton({ data }) {
  const [csvData, setCsvData] = React.useState([]);

  const exportToCSV = async () => {
    const csvData = data.map((item) =>
      `${item.id},${item.FirstName},${item.LastName},${item.Age},${item.Country}`
    );

    setCsvData(csvData);

    const csvContent = [
      'customer_id,first_name,last_name,age,country',
      ...csvData,
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'customer_data.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      className='export-button'
      onClick={exportToCSV}
      aria-label="Export CSV"
    >
      Export CSV
    </button>
  );
}

export default ExportButton;
