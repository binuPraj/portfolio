import styles from './Skills.module.css';
import { Code2, Server, Cpu, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 'Advanced', abbr: 'Py' },
      { name: 'C', level: 'Proficient', abbr: 'C' },
      { name: 'C++', level: 'Proficient', abbr: 'C++' },
      { name: 'JavaScript', level: 'Proficient', abbr: 'JS' },
      { name: 'TypeScript', level: 'Working', abbr: 'TS' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Django / DRF', level: 'Advanced', abbr: 'Dj' },
      { name: 'FastAPI', level: 'Advanced', abbr: 'FA' },
      { name: 'Flask', level: 'Proficient', abbr: 'Fl' },
      { name: 'REST APIs', level: 'Advanced', abbr: 'API' },
    ]
  },
  {
    title: 'AI/ML & Data Pipelines',
    icon: Cpu,
    skills: [
      { name: 'PyTorch', level: 'Applied', abbr: 'PT' },
      { name: 'scikit-learn', level: 'Proficient', abbr: 'SK' },
      { name: 'NLP & LLM APIs', level: 'Applied', abbr: 'NLP' },
      { name: 'Pandas & NumPy', level: 'Advanced', abbr: 'PD' },
      { name: 'Audio & Vision (Whisper/InsightFace)', level: 'Applied', abbr: 'AV' },
    ]
  },
  {
    title: 'Databases & Web',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', abbr: 'PG' },
      { name: 'MongoDB', level: 'Proficient', abbr: 'MG' },
      { name: 'MySQL', level: 'Proficient', abbr: 'MY' },
      { name: 'SQLite', level: 'Proficient', abbr: 'SQ' },
      { name: 'HTML5 & CSS3', level: 'Advanced', abbr: 'H5' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 'Daily', abbr: 'Git' },
      { name: 'VS Code', level: 'Daily', abbr: 'VSC' },
      { name: 'Postman', level: 'Proficient', abbr: 'PM' },
      { name: 'Jupyter & Colab', level: 'Daily', abbr: 'Jup' },
      { name: 'LaTeX', level: 'Proficient', abbr: 'Tex' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="sectionHeader">
          <div className="sectionBadge">
            <Sparkles size={14} />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="sectionTitle">
            Technical <span className="sectionTitleGradient">Skills &amp; Toolchain</span>
          </h2>
          <p className="sectionSubtitle">
            Core programming languages, backend frameworks, machine learning libraries, databases, and engineering tools.
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <div className={styles.iconWrap}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <div className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillLeft}>
                        <span className={styles.skillAbbr}>{skill.abbr}</span>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <span className={styles.skillLevel}>{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
