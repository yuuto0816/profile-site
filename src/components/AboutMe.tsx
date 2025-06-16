"use client"; // Framer Motionを使うコンポーネントにも必要です

import { motion } from 'framer-motion'; // ← motionをインポート
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git"];

  return (
    // <section> を <motion.section> に変更し、アニメーションの指示を追加
    <motion.section 
      className={styles.section}
      initial={{ opacity: 0, y: 50 }} // 初期状態：透明で、少し下にある
      whileInView={{ opacity: 1, y: 0 }} // 画面内に入ったら：不透明になり、元の位置に戻る
      viewport={{ once: true, amount: 0.3 }} // アニメーションを1回だけ再生、要素が30%見えたら開始
      transition={{ duration: 0.8, ease: "easeOut" }} // 0.8秒かけてアニメーション
    >
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.bio}>
            ここにあなたの自己紹介文を入れます。これまでの学習経験や、
            どのようなエンジニアになりたいか、あなたの強みなどをアピールしましょう。
            文章は後でいつでも修正できます。
          </p>
          <h3 className={styles.subHeading}>Skills</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;