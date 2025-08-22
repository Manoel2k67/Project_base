import React from 'react';

const Dashboard = () => {
  const kpiData = [
    { title: 'Total de Vendas', value: 'R$ 12.500', trend: '+15% desde o último mês' },
    { title: 'Novos Clientes', value: '245', trend: '+8% desde a semana passada' },
    { title: 'Taxa de Conversão', value: '4.2%', trend: '-2% desde o último mês' },
    { title: 'Visitas ao Site', value: '32.1k', trend: '+25% desde o último mês' },
  ];

  return (
    <div className="page-content">
      <h1>Dashboard</h1>
      <p>Bem-vindo à sua área de dashboard! Aqui você encontra um resumo rápido dos seus dados mais importantes.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {kpiData.map((kpi, index) => (
          <div key={index} style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)', backgroundColor: 'var(--color-bg-sidebar)' }}>
            <h3 style={{ fontSize: '1.2em', margin: '0 0 10px' }}>{kpi.title}</h3>
            <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '0' }}>{kpi.value}</p>
            <p style={{ fontSize: '0.9em', color: 'var(--color-text-placeholder)' }}>{kpi.trend}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)', backgroundColor: 'var(--color-bg-sidebar)' }}>
        <h2>Vendas Diárias</h2>
        {/* Este é um espaço para um gráfico. Para um projeto real, você usaria uma biblioteca como Chart.js ou Recharts. */}
        <div style={{ height: '300px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--color-text-placeholder)', fontSize: '1.2em' }}>
          Espaço para Gráfico de Vendas
        </div>
      </div>
    </div>
  );
};

export default Dashboard;