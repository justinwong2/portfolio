import Image from 'next/image';
import styles from './hero.module.css';
import { profile } from '@/data/profile';

interface MetaItem {
  label: string;
  value: string;
}

const metaItems: MetaItem[] = [
  { label: 'EDUCATION', value: 'NUS BUSINESS ANALYTICS' },
  { label: 'EXPECTED GRADUATION', value: 'MAY 2027' },
  { label: 'LOCATION', value: 'SINGAPORE' },
  { label: 'UPDATED', value: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase() },
];

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Meta Panel - cols 1-3 */}
      <aside className={styles.metaPanel}>
        {metaItems.map((item) => (
          <div key={item.label} className={styles.metaCell}>
            <span className={styles.metaLabel}>{item.label}</span>
            <span className={styles.metaValue}>{item.value}</span>
          </div>
        ))}
      </aside>

      {/* Display - cols 4-12 */}
      <div className={styles.display}>
        <div className={styles.headlineRow}>
          <h1 className={styles.headline}>
            Justin <br />
            <span className={styles.rust}>Wong</span>
          </h1>
          <div className={styles.headshotContainer}>
            <Image
              src={profile.headshot}
              alt="Justin Wong"
              fill
              className={styles.headshot}
            />
          </div>
        </div>

        <div className={styles.divider} />

        {/* Bio Section */}
        <div className={styles.bioSection}>
          <div className={styles.bioText}>
            <p>
              Hi everyone, I’m Justin, a Year 3 Business Analytics student at NUS. I’m currently exploring different career paths, with a strong interest in areas like MLOps, AI Engineering, and Cloud Architecture. I enjoy building projects for fun as a way to gain hands-on experience with technologies that interest me and to continuously learn new things.

Outside of tech, I enjoy hiking and working out - one of my life goals is to visit every National Park in the US before I die!

I’m always open to connecting with like-minded people. If you’re interested in tech, building projects, or just want to chat, feel free to drop me a message on LinkedIn!
            </p>
          </div>
          <div className={styles.bioSidebar}>
            <span className={styles.bioLabel}>OPEN TO</span>
            <span className={styles.bioValue}>AUG - DEC &apos;26</span>
            <div className={styles.bioTags}>
              <span>AI/ML</span>
              <span>·</span>
              <span>DS</span>
              <span>·</span>
              <span>CLOUD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
