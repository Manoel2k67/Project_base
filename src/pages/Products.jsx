import React from 'react';

const Products = () => {
  const mockProducts = [
    { id: 1, name: 'Smartphone Pro', price: 'R$ 2.500', stock: 'Em Estoque' },
    { id: 2, name: 'Fones de Ouvido Wireless', price: 'R$ 350', stock: 'Esgotado' },
    { id: 3, name: 'Smartwatch Ultra', price: 'R$ 900', stock: 'Em Estoque' },
    { id: 4, name: 'Webcam 4K', price: 'R$ 220', stock: 'Em Estoque' },
    { id: 5, name: 'Mouse Gamer', price: 'R$ 150', stock: 'Em Estoque' },
  ];

  return (
    <div className="page-content">
      <h1>Products</h1>
      <p>Catálogo de produtos.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {mockProducts.map((product) => (
          <div key={product.id} style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)', backgroundColor: 'var(--color-bg-sidebar)' }}>
            <h3 style={{ fontSize: '1.2em', margin: '0 0 10px' }}>{product.name}</h3>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '0' }}>{product.price}</p>
            <p style={{ fontSize: '0.9em', color: product.stock === 'Em Estoque' ? 'green' : 'red' }}>{product.stock}</p>
            <button style={{ marginTop: '15px', padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: 'var(--color-hover-primary)', color: '#fff', cursor: 'pointer' }}>
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;