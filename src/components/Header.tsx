"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // メニューの開閉を切り替える関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* ↓↓↓ Homeへのリンクもアンカーリンクに変更 ↓↓↓ */}
          <Link href="/#home">My Portfolio</Link>
        </div>

        {/* PC用ナビゲーション */}
        <nav className={`${styles.nav} ${styles.pcNav}`}>
          <ul>
            {/* ↓↓↓ ここのリンクをすべて変更します ↓↓↓ */}
            <li><Link href="/#home">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#works">Works</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>

        {/* ハンバーガーアイコンのボタン */}
        <button 
          className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`} 
          onClick={toggleMenu} 
          aria-label="メニューを開閉する"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* モバイル用ドロップダウンメニュー */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <nav>
          <ul>
            {/* ↓↓↓ ここのリンクもすべて変更します ↓↓↓ */}
            <li><Link href="/#home" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/#about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/#works" onClick={toggleMenu}>Works</Link></li>
            <li><Link href="/#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;