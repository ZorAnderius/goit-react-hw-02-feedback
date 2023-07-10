import btnCSS from './FeedbackBtn.module.css';

export const FeedbackBtn = ({ text, onClick }) => {
  return (
    <button type="button" className={btnCSS.btn} onClick={onClick}>
      {text}
    </button>
  );
};
