import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import styles from './page.module.css';
import AboutMe from '@/components/AboutMe'; 
import Works from '@/components/Works/'; 

const HomePage = () => {
  return (
    <> {/*複数の要素を並べるため、フラグメント <> で囲みます*/}
      
      {/* ↓↓↓ このdivに id="home" を追加します ↓↓↓ */}
      <div id="home" className={styles.heroSection}>
        {/* ... (ヒーローセクションの中身は変更なし) ... */}
        <h1 className={styles.title}>
          [あなたのキャッチフレーズ]
        </h1>
        <p className={styles.name}>
          [あなたの名前]
        </p>
        <p className={styles.description}>
          ここにあなたの簡単な自己紹介文を入れます。フロントエンド開発への情熱や、
          どのような技術に興味があるかなどを簡潔に書きましょう。
        </p>
        <div className={styles.iconLink}>
          <Link 
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </Link>
        </div>
      </div>
      
      <AboutMe /> 

      <Works />

    </>
  );
};

export default HomePage;