import styles from './Footer.module.css'; // 作成したCSSファイルをインポート

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} MIKI YUTO. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;