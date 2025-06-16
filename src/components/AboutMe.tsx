import styles from './AboutMe.module.css';

const AboutMe = () => {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git"];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 左側：プロフィール画像エリア */}
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            {/* 今は画像がないので、枠だけ表示します。後でここにNext.jsのImageコンポーネントを入れます */}
          </div>
        </div>

        {/* 右側：テキストエリア */}
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
    </section>
  );
};

export default AboutMe;