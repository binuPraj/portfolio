import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Core Strengths",
    icon: "◆",
    skills: [
      { name: "Problem Solving" },
      { name: "UI Thinking" },
      { name: "User Research" },
      { name: "Team Collaboration" },
      { name: "Responsive Layouts" }
    ]
  },
  {
    title: "Architecture",
    icon: "🛡️",
    skills: [
      { name: "API Design" },
      { name: "System Thinking" },
      { name: "Data Modeling" },
      { name: "Testing & QA" }
    ]
  },
  {
    title: "Collaboration",
    icon: "⚡",
    skills: [
      { name: "Version Control" },
      { name: "Design Collaboration" },
      { name: "Documentation" },
      { name: "Team Communication" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      {/* Background decoration */}
      <div className={styles.bgPattern}></div>
      
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleIcon}>◆</span>
          Skills
          <span className={styles.accent}>.</span>
        </h2>
        <p className={styles.subtitle}>Abilities & Proficiencies</p>
        
        <div className={styles.categories}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className={styles.category}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3>{category.title}</h3>
                <div className={styles.categoryLine}></div>
              </div>
              
              <div className={styles.skillGrid}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillCard}>
                    <div className={styles.skillLogoPlaceholder} aria-hidden>
                      {skill.name.charAt(0)}
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
