import React from 'react';
import customerData from './CustomerData';
import '../styles/ExportButton.css';

function ExportButton() {
  const exportToCSV = () => {
    const csvData = customerData.map((item) =>
      `${item.customer_id},${item.first_name},${item.last_name},${item.age},${item.country}`
    );

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
