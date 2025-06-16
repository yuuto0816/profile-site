import Link from 'next/link';
import styles from './Header.module.css'; // 作成したCSSファイルをインポート

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            My Portfolio
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/works">Works</Link></li>
            {/* <li><Link href="/blog">Blog</Link></li> */}
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;