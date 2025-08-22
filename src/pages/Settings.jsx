import React from 'react';

const Settings = () => {
  return (
    <div className="page-content">
      <h1>Settings</h1>
      <p>Configurações do sistema.</p>
      <div style={{ marginTop: '20px', backgroundColor: 'var(--color-bg-sidebar)', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Configuração de Idioma */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-hr)', paddingBottom: '15px' }}>
          <label htmlFor="language-select" style={{ color: 'var(--color-text-primary)' }}>Idioma</label>
          <select id="language-select" style={{ padding: '8px', borderRadius: '5px', border: '1px solid var(--color-border-hr)', backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-primary)' }}>
            <option>Português (Brasil)</option>
            <option>English (US)</option>
          </select>
        </div>

        {/* Notificações por Email */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-hr)', paddingBottom: '15px' }}>
          <label style={{ color: 'var(--color-text-primary)' }}>Notificações por Email</label>
          <div style={{ position: 'relative', width: '48px', height: '24px', backgroundColor: '#ccc', borderRadius: '999px', transition: 'background-color 0.3s ease' }}>
            <div style={{ position: 'absolute', top: '3px', left: '3px', width: '18px', height: '18px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}></div>
          </div>
        </div>

        {/* Botão de Salvar */}
        <button style={{ width: 'fit-content', padding: '10px 20px', border: 'none', borderRadius: '8px', backgroundColor: 'var(--color-hover-primary)', color: '#fff', cursor: 'pointer', alignSelf: 'flex-end' }}>
          Salvar Alterações
        </button>
      </div>
    </div>
  );
};

export default Settings;