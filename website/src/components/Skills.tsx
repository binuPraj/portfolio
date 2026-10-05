import styles from './Skills.module.css';
import { Code2, Server, Cpu, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', abbr: 'Py' },
      { name: 'C', abbr: 'C' },
      { name: 'C++', abbr: 'C++' },
      { name: 'JavaScript', abbr: 'JS' },
      { name: 'TypeScript', abbr: 'TS' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Django / DRF', abbr: 'Dj' },
      { name: 'FastAPI', abbr: 'FA' },
      { name: 'Flask', abbr: 'Fl' },
      { name: 'REST APIs', abbr: 'API' },
    ]
  },
  {
    title: 'AI/ML & Data Pipelines',
    icon: Cpu,
    skills: [
      { name: 'PyTorch', abbr: 'PT' },
      { name: 'scikit-learn', abbr: 'SK' },
      { name: 'NLP & LLM APIs', abbr: 'NLP' },
      { name: 'Pandas & NumPy', abbr: 'PD' },
      { name: 'Audio & Vision (Whisper/InsightFace)', abbr: 'AV' },
    ]
  },
  {
    title: 'Databases & Web',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', abbr: 'PG' },
      { name: 'MongoDB', abbr: 'MG' },
      { name: 'MySQL', abbr: 'MY' },
      { name: 'SQLite', abbr: 'SQ' },
      { name: 'HTML5 & CSS3', abbr: 'H5' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', abbr: 'Git' },
      { name: 'VS Code', abbr: 'VSC' },
      { name: 'Postman', abbr: 'PM' },
      { name: 'Jupyter & Colab', abbr: 'Jup' },
      { name: 'LaTeX', abbr: 'Tex' },
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
                      <span className={styles.skillAbbr}>{skill.abbr}</span>
                      <span className={styles.skillName}>{skill.name}</span>
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
