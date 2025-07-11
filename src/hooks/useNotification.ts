import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationProvider';

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
