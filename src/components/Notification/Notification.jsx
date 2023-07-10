import notifCSS from './Notification.module.css';

export const Notification = ({ message }) => {
  return <div className={notifCSS.message}>{message}</div>;
};
