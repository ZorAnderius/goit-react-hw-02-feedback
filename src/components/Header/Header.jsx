import headerCSS from './Header.module.css';

export const Header = ({ title, styles }) => {
  return (
    <>
      <h2 className={headerCSS[`${styles}`]}>{title}</h2>
    </>
  );
};
