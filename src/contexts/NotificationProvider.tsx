import { createContext, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./NotificationProvider.scss";

export interface Notification {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title: string;
  message?: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  showSuccess: (title: string, message?: string) => void;
  showError: (title: string, message?: string) => void;
  showInfo: (title: string, message?: string) => void;
  showWarning: (title: string, message?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export { NotificationContext };

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, "id">) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = {
      ...notification,
      id,
      duration: notification.duration || 4000,
    };

    setNotifications((prev) => [...prev, newNotification]);

    // Auto-remove après la durée spécifiée
    setTimeout(() => {
      removeNotification(id);
    }, newNotification.duration);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const showSuccess = (title: string, message?: string) => {
    addNotification({ type: "success", title, message });
  };

  const showError = (title: string, message?: string) => {
    addNotification({ type: "error", title, message });
  };

  const showInfo = (title: string, message?: string) => {
    addNotification({ type: "info", title, message });
  };

  const showWarning = (title: string, message?: string) => {
    addNotification({ type: "warning", title, message });
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        showSuccess,
        showError,
        showInfo,
        showWarning,
      }}
    >
      {children}
      <div className="notification-container">
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              className={`notification notification--${notification.type}`}
              initial={{ opacity: 0, x: 300, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => removeNotification(notification.id)}
            >
              <div className="notification__icon">
                {notification.type === "success" && "✓"}
                {notification.type === "error" && "✕"}
                {notification.type === "info" && "ℹ"}
                {notification.type === "warning" && "⚠"}
              </div>
              <div className="notification__content">
                <h4 className="notification__title">{notification.title}</h4>
                {notification.message && (
                  <p className="notification__message">
                    {notification.message}
                  </p>
                )}
              </div>
              <button
                className="notification__close"
                onClick={(e) => {
                  e.stopPropagation();
                  removeNotification(notification.id);
                }}
              >
                ×
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};
