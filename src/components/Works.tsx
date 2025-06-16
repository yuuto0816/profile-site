"use client";

import { motion } from 'framer-motion';
import styles from './Works.module.css';

// ... (dummyWorksのデータは変更なし) ...
const dummyWorks = [
  {
    id: '1',
    title: '制作実績タイトル1',
    description: 'この制作物の簡単な説明をここに記述します。使用技術や担当箇所など。',
  },
  {
    id: '2',
    title: '制作実績タイトル2',
    description: 'この制作物の簡単な説明をここに記述します。使用技術や担当箇所など。',
  },
  {
    id: '3',
    title: '制作実績タイトル3',
    description: 'この制作物の簡単な説明をここに記述します。使用技術や担当箇所など。',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


const Works = () => {
  return (
    <motion.section 
      id="works" // ← この行を追加します
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.gridContainer}>
        {dummyWorks.map((work) => (
          <motion.div 
            key={work.id} 
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.thumbnailPlaceholder} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{work.title}</h3>
              <p className={styles.cardDescription}>{work.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Works;