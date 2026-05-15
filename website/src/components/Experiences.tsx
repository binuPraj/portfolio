import Image from 'next/image';
import { CalendarDays, MapPin } from 'lucide-react';
import styles from './Experiences.module.css';

const experiences = [
  {
    title: 'KU Hackest',
    image: '/images/certificate/ku.jpg',
    date: 'May 2025',
    location: 'Kathmandu, Nepal',
    description:
      'Participated in a fast-paced hackathon environment, building and presenting an innovative project while collaborating under deadline pressure.',
    color: 'blue',
  },
  {
    title: 'Nobel Internship',
    image: '/images/certificate/nobel.jpg',
    date: 'Jan 2026',
    location: 'Lalitpur, Nepal',
    description:
      'Completed an internship that provided practical exposure to team workflows, communication, and real-world technical problem solving.',
    color: 'violet',
  },
  {
    title: 'Khwopa CEEL 2026 Participant',
    image: '/images/certificate/khwopaceel.jpg',
    date: 'Mar 2026',
    location: 'Bhaktapur, Nepal',
    description:
      'Joined the Khwopa CEEL 2026 program and took part in learning sessions focused on hands-on growth, technical confidence, and collaboration.',
    color: 'cyan',
  },
];

export default function Experiences() {
  return (
    <section className={styles.experiences}>
      <div className={styles.bgPattern}></div>

      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleIcon}>◆</span>
          Experiences
          <span className={styles.accent}>.</span>
        </h2>
        <p className={styles.subtitle}>Certificates, internships, and participation highlights</p>

        <div className={styles.list}>
          {experiences.map((item) => (
            <article key={item.title} className={styles.row} data-tone={item.color}>
              <div className={styles.imageWrap}>
                <Image src={item.image} alt={item.title} fill className={styles.image} />
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>

                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>
                    <CalendarDays size={16} />
                    {item.date}
                  </span>
                  <span className={styles.metaItem}>
                    <MapPin size={16} />
                    {item.location}
                  </span>
                </div>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}