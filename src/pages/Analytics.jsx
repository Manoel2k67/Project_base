import React from 'react';

const Analytics = () => {
  const mockData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Fev', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Abr', revenue: 4500 },
    { month: 'Mai', revenue: 6000 },
    { month: 'Jun', revenue: 5500 },
  ];

  return (
    <div className="page-content">
      <h1>Analytics</h1>
      <p>Acompanhe o desempenho do seu negócio com dados detalhados e gráficos interativos.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
        {/* Gráfico de Linha de Receita Mensal */}
        <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)', backgroundColor: 'var(--color-bg-sidebar)' }}>
          <h2>Receita Mensal</h2>
          <div style={{ height: '300px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--color-text-placeholder)' }}>
            Espaço para Gráfico de Linha
          </div>
        </div>

        {/* Métrica de Engajamento do Usuário */}
        <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)', backgroundColor: 'var(--color-bg-sidebar)' }}>
          <h2>Métricas de Engajamento</h2>
          <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ borderBottom: '1px solid var(--color-border-hr)', paddingBottom: '10px' }}>
              <strong>Usuários Ativos:</strong> 5.2k
            </li>
            <li style={{ borderBottom: '1px solid var(--color-border-hr)', paddingBottom: '10px' }}>
              <strong>Sessões:</strong> 15.8k
            </li>
            <li>
              <strong>Taxa de Rejeição:</strong> 25.4%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;