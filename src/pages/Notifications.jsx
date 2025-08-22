import React from 'react';

const Notifications = () => {
  const mockNotifications = [
    { id: 1, message: 'Novo pedido recebido: #45678. Verifique os detalhes.', read: false, time: '5 minutos atrás' },
    { id: 2, message: 'Seu relatório de vendas semanais está pronto para ser visualizado.', read: true, time: '1 hora atrás' },
    { id: 3, message: 'O produto "Teclado Mecânico" está com baixo estoque.', read: false, time: '3 horas atrás' },
    { id: 4, message: 'Uma nova atualização de segurança foi aplicada.', read: true, time: 'Ontem' },
  ];

  return (
    <div className="page-content">
      <h1>Notifications</h1>
      <p>Suas notificações mais recentes.</p>
      <div style={{ marginTop: '20px', backgroundColor: 'var(--color-bg-sidebar)', borderRadius: '8px', boxShadow: '0 2px 8px var(--color-shadow)', padding: '20px' }}>
        <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {mockNotifications.map(notification => (
            <li key={notification.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', padding: '15px', backgroundColor: notification.read ? 'transparent' : 'var(--color-bg-secondary)', borderRadius: '8px' }}>
              <span className="material-symbols-rounded" style={{ color: notification.read ? 'var(--color-text-placeholder)' : 'var(--color-hover-primary)', fontSize: '24px' }}>
                {notification.read ? 'check_circle' : 'circle_notifications'}
              </span>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <p style={{ margin: '0', fontSize: '1.1em', fontWeight: notification.read ? 'normal' : 'bold' }}>{notification.message}</p>
                <p style={{ margin: '5px 0 0', fontSize: '0.8em', color: 'var(--color-text-placeholder)' }}>{notification.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;