import React from 'react';

const Customers = () => {
  const mockCustomers = [
    { id: 1, name: 'Ana Oliveira', email: 'ana.o@example.com', lastPurchase: '15/07/2024' },
    { id: 2, name: 'Bruno Costa', email: 'bruno.c@example.com', lastPurchase: '20/07/2024' },
    { id: 3, name: 'Carla Dias', email: 'carla.d@example.com', lastPurchase: '10/08/2024' },
    { id: 4, name: 'Daniel Souza', email: 'daniel.s@example.com', lastPurchase: '05/08/2024' },
  ];

  return (
    <div className="page-content">
      <h1>Customers</h1>
      <p>Lista dos seus clientes.</p>
      <div style={{ overflowX: 'auto', marginTop: '20px', backgroundColor: 'var(--color-bg-sidebar)', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-hr)', textAlign: 'left' }}>
              <th style={{ padding: '15px', color: 'var(--color-text-placeholder)' }}>Nome</th>
              <th style={{ padding: '15px', color: 'var(--color-text-placeholder)' }}>Email</th>
              <th style={{ padding: '15px', color: 'var(--color-text-placeholder)' }}>Última Compra</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((customer) => (
              <tr key={customer.id} style={{ borderBottom: '1px solid var(--color-border-hr)' }}>
                <td style={{ padding: '15px' }}>{customer.name}</td>
                <td style={{ padding: '15px' }}>{customer.email}</td>
                <td style={{ padding: '15px' }}>{customer.lastPurchase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;