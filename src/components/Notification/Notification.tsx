import css from './Notification.module.css';



export default function Notification() {
  return (
    <div className={css.notification}>
      <p className={css.message}>No feedback yet</p>
    </div>
  );
}