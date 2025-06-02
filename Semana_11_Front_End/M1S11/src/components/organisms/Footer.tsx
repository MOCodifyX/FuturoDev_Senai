import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} MOCine • Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;