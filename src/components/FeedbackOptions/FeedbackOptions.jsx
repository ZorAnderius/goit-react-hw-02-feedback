import { FeedbackBtn } from 'components/FeedbackBtn/FeedbackBtn';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(({ id, data }) => (
        <FeedbackBtn
          key={id}
          text={data}
          onClick={() => onLeaveFeedback(data)}
        />
      ))}
    </>
  );
};
