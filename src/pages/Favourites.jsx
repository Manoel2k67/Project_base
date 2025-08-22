import React from 'react';

const Favourites = () => {
  const mockFavourites = [
    { id: 1, name: 'Relatório Anual', type: 'documento', icon: 'description' },
    { id: 2, name: 'Tênis de Corrida X-1', type: 'produto', icon: 'sprint' },
    { id: 3, name: 'Cliente João Silva', type: 'contato', icon: 'person' },
    { id: 4, name: 'Gráfico de Receita', type: 'visualização', icon: 'bar_chart' },
    { id: 5, name: 'Configurações de Tema', type: 'configuração', icon: 'palette' },
  ];

  return (
    <div className="page-content">
      <h1>Favourites</h1>
      <p>Seus itens favoritos para acesso rápido.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {mockFavourites.map((item) => (
          <div key={item.id} style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)', backgroundColor: 'var(--color-bg-sidebar)', textAlign: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '48px', color: 'var(--color-hover-primary)' }}>{item.icon}</span>
            <h3 style={{ fontSize: '1.2em', margin: '15px 0 5px' }}>{item.name}</h3>
            <p style={{ fontSize: '0.9em', color: 'var(--color-text-placeholder)' }}>{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;