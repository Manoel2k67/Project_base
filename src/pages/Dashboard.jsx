import React, { useState } from 'react';
import { FaDollarSign, FaUserPlus, FaChartLine, FaGlobe } from 'react-icons/fa';
import {
  BarChart, Bar, AreaChart, Area, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const KpiCard = ({ title, value, trend, icon }) => (
  <div className="kpi-card">
    <div className="kpi-icon">{icon}</div>
    <h3 className="kpi-title">{title}</h3>
    <p className="kpi-value">{value}</p>
    <p className={`kpi-trend ${trend.includes('+') ? 'positive' : 'negative'}`}>
      {trend}
    </p>
  </div>
);

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');

  const kpiData = [
    {
      title: 'Total de Vendas',
      value: 'R$ 12.500',
      trend: '+15% desde o último mês',
      icon: <FaDollarSign />
    },
    {
      title: 'Novos Clientes',
      value: '245',
      trend: '+8% desde a semana passada',
      icon: <FaUserPlus />
    },
    {
      title: 'Taxa de Conversão',
      value: '4.2%',
      trend: '-2% desde o último mês',
      icon: <FaChartLine />
    },
    {
      title: 'Visitas ao Site',
      value: '32.1k',
      trend: '+25% desde o último mês',
      icon: <FaGlobe />
    },
  ];

  const dailySalesData = [
    { day: 'Seg', vendas: 1200, meta: 1500 },
    { day: 'Ter', vendas: 1900, meta: 1500 },
    { day: 'Qua', vendas: 1400, meta: 1500 },
    { day: 'Qui', vendas: 2100, meta: 1500 },
    { day: 'Sex', vendas: 2800, meta: 2500 },
    { day: 'Sáb', vendas: 2200, meta: 2000 },
    { day: 'Dom', vendas: 1800, meta: 2000 },
  ];

  const trafficSourceData = [
    { name: 'Orgânico', value: 400 },
    { name: 'Social', value: 300 },
    { name: 'Email', value: 200 },
    { name: 'Direto', value: 100 },
  ];

  const monthlyRevenueData = [
    { month: 'Jan', receita: 8000, despesas: 4500 },
    { month: 'Fev', receita: 9500, despesas: 5000 },
    { month: 'Mar', receita: 11000, despesas: 5200 },
    { month: 'Abr', receita: 10500, despesas: 4800 },
    { month: 'Mai', receita: 12500, despesas: 5100 },
    { month: 'Jun', receita: 13200, despesas: 5300 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <style>{`
        /* Variáveis de Cores (reaproveitadas do seu index.css) */
        :root {
          --color-text-primary: #1F2936;
          --color-text-placeholder: #798EAE;
          --color-bg-primary: #f9fafb;
          --color-bg-secondary: #ECECFD;
          --color-bg-sidebar: #FFFFFF;
          --color-border-hr: #E2E8F0;
          --color-hover-primary: #695CFE;
          --color-hover-secondary: #e2e2fb;
          --color-shadow: rgba(0, 0, 0, 0.05);
          --color-success: #4CAF50;
          --color-success-light: #e8f5e9;
          --color-error: #f44336;
          --color-warning: #FFC107;
          --color-warning-light: #FFF8E1;
          --color-primary: #2196F3;
          --color-primary-light: #E3F2FD;
        }

        body.dark-theme {
          --color-text-primary: #F1F5F9;
          --color-text-placeholder: #A6B7D2;
          --color-bg-primary: #111827;
          --color-bg-secondary: #3D4859;
          --color-bg-sidebar: #1F2937;
          --color-border-hr: #3B475C;
          --color-hover-secondary: #48566a;
          --color-shadow: rgba(0, 0, 0, 0.3);
        }

        html, body {
            overflow-x: hidden;
        }

        /* Estilos do Dashboard */
        .page-content {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 3px 9px var(--color-shadow);
          background-color: var(--color-bg-primary);
          color: var(--color-text-primary);
          transition: background-color 0.3s ease, color 0.3s ease;
          min-width: 0; /* Essencial para evitar o transbordamento */
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .header-container select {
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid var(--color-border-hr);
          background-color: var(--color-bg-sidebar);
          color: var(--color-text-primary);
        }
        
        @media (max-width: 500px) {
            .header-container {
                flex-direction: column;
                align-items: flex-start;
            }
            .header-container select {
                margin-top: 10px;
            }
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .kpi-card {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px var(--color-shadow);
          background-color: var(--color-bg-sidebar);
          position: relative;
          overflow: hidden;
          transition: background-color 0.3s ease;
        }

        .kpi-icon {
          font-size: 2em;
          position: absolute;
          top: 15px;
          right: 15px;
          opacity: 0.1;
          color: var(--color-text-primary);
        }

        .kpi-title {
          font-size: 1.2em;
          margin: 0 0 10px;
        }

        .kpi-value {
          font-size: 2em;
          font-weight: bold;
          margin: 0;
        }

        .kpi-trend {
          font-size: 0.9em;
          margin: 5px 0 0;
        }

        .kpi-trend.positive {
          color: var(--color-success);
        }

        .kpi-trend.negative {
          color: var(--color-error);
        }
        
        /* Regra para empilhar os gráficos em telas menores */
        .charts-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 40px;
        }

        .chart-card {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px var(--color-shadow);
          background-color: var(--color-bg-sidebar);
        }

        .large-chart {
          grid-column: 1 / -1;
        }

        .table-card {
          margin-top: 40px;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px var(--color-shadow);
          background-color: var(--color-bg-sidebar);
        }

        .table-responsive {
          overflow-x: auto;
        }

        .table-card table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-card th, .table-card td {
          text-align: left;
          padding: 12px;
          white-space: nowrap;
        }

        .table-card thead tr {
          border-bottom: 1px solid var(--color-border-hr);
        }

        .table-card tbody tr {
          border-bottom: 1px solid var(--color-border-light);
        }

        .status-badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8em;
        }

        .status-badge.qualified {
          background-color: var(--color-success-light);
          color: var(--color-success);
        }

        .status-badge.in-progress {
          background-color: var(--color-warning-light);
          color: var(--color-warning);
        }

        .status-badge.new {
          background-color: var(--color-primary-light);
          color: var(--color-primary);
        }
      `}</style>

      <div className="page-content">
        <div className="header-container">
          <div>
            <h1>Dashboard</h1>
            <p>Bem-vindo à sua área de dashboard! Aqui você encontra um resumo rápido dos seus dados mais importantes.</p>
          </div>
          <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            <option value="week">Esta semana</option>
            <option value="month">Este mês</option>
            <option value="quarter">Este trimestre</option>
          </select>
        </div>

        <div className="kpi-grid">
          {kpiData.map((kpi, index) => (
            <KpiCard key={index} {...kpi} />
          ))}
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h2>Vendas Diárias vs Meta</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailySalesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="meta" fill="#8884d8" name="Meta de Vendas" />
                <Bar dataKey="vendas" fill="#82ca9d" name="Vendas Realizadas" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h2>Fontes de Tráfego</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card large-chart">
            <h2>Receita vs Despesas (Últimos 6 Meses)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyRevenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="receita" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Receita" />
                <Area type="monotone" dataKey="despesas" stackId="2" stroke="#ff7c7c" fill="#ff7c7c" name="Despesas" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="table-card">
          <h2>Leads Recentes</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Empresa</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maria Silva</td>
                  <td>maria@empresa.com</td>
                  <td>Tech Solutions</td>
                  <td><span className="status-badge qualified">Qualificado</span></td>
                </tr>
                <tr>
                  <td>João Santos</td>
                  <td>joao@empresa.com</td>
                  <td>InovaTech</td>
                  <td><span className="status-badge in-progress">Em andamento</span></td>
                </tr>
                <tr>
                  <td>Ana Costa</td>
                  <td>ana@outraempresa.com</td>
                  <td>DataSystems</td>
                  <td><span className="status-badge new">Novo</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;