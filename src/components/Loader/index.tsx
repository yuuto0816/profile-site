"use client";

import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = () => {
  const title = "My Portfolio";
  const letters = Array.from(title); // 文字列を一文字ずつの配列に変換

  // コンテナ用のアニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8, // 子要素のアニメーションを0.8秒遅れて開始
        staggerChildren: 0.1, // ★★★キモ：子要素を0.1秒ずつずらして表示
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  // 各文字用のアニメーション設定
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div className={styles.loaderContainer}>
      {/* 上下のパネル */}
      <motion.div 
        className={`${styles.slidePanel} ${styles.topPanel}`}
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.6 }}
      />
      <motion.div 
        className={`${styles.slidePanel} ${styles.bottomPanel}`}
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.6 }}
      />

      {/* 中央に表示するテキスト */}
      <motion.div
        className={styles.loaderText}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        aria-label={title}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {/* 空白の場合は、見えない文字でスペースを確保する */}
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;