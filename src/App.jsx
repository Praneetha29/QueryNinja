import React from 'react';
import Navbar from './components/Navbar';


function App() {
  const tables = [
    { name: 'Customers', fields: ['customer_id', 'first_name', 'last_name', 'age', 'country'] },
    { name: 'Orders', fields: ['order_id', 'item', 'amount', 'customer_id'] },
    { name: 'Shippings', fields: ['shipping_id', 'status', 'customer'] },
  ];

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
