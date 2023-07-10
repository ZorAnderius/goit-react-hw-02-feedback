import statCSS from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={statCSS.text_box}>
        <div className={statCSS.text_box_elem}>Good:</div>
        <div className={statCSS.text_box_elem}>{good}</div>
      </div>
      <div className={statCSS.text_box}>
        <div className={statCSS.text_box_elem}>Neutral:</div>
        <div className={statCSS.text_box_elem}>{neutral}</div>
      </div>
      <div className={statCSS.text_box}>
        <div className={statCSS.text_box_elem}>Bad:</div>
        <div className={statCSS.text_box_elem}>{bad}</div>
      </div>
      <div className={statCSS.text_box}>
        <div className={statCSS.text_box_elem}>Total:</div>
        <div className={statCSS.text_box_elem}>{total}</div>
      </div>
      <div className={statCSS.text_box}>
        <div className={statCSS.text_box_elem}>Positive feedback:</div>
        <div className={statCSS.text_box_elem}>{positivePercentage}%</div>
      </div>
    </>
  );
};
