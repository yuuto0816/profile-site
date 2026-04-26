"use client";

import { motion } from 'framer-motion';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git"];

  return (
    <motion.section 
      id="about"
      className={styles.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.bio}>
            京都のIT専門学校で高度専門士を目指しながら、スタートアップでの実務や仲間と立ち上げた開発チーム「Axcira」で活動し、日々技術研鑽に励んでいます！<br />
            現在はTypeScript、Python、Goを中心に、フロントエンドからAIまで幅広く対応できるフルスタックなエンジニアを目指して勉強中です。
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