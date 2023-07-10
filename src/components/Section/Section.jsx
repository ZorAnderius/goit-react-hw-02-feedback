import { Header } from 'components/Header/Header';

export const Section = ({ title, styles, children }) => {
  return (
    <section>
      <Header title={title} styles={styles} />
      {children}
    </section>
  );
};
