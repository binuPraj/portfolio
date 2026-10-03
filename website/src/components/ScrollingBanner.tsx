import styles from './ScrollingBanner.module.css';

const techItems = [
  'NationalAI Hackathon 2026 Runner-Up',
  'RECONNECT (Dementia Care AI)',
  'POLARISAI Controversy Engine',
  'RentEra P2P Platform',
  'KU Hackathon AI/ML Winner',
  'FastAPI & Django',
  'PyTorch & Whisper',
  'Multi-Stage Data Pipelines',
  'PostgreSQL & MongoDB',
  'InsightFace & PyAnnote',
  'REST APIs & System Design',
];

export default function ScrollingBanner() {
  return (
    <div className={styles.marqueeSection} aria-hidden>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {techItems.concat(techItems).map((tech, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.sparkleDot}>✦</span>
              <span className={styles.techName}>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
