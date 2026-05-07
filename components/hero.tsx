import styles from './hero.module.css';

interface MetaItem {
  label: string;
  value: string;
}

const metaItems: MetaItem[] = [
  { label: 'INDEX', value: '001' },
  { label: 'SUBJECT', value: 'PORTFOLIO' },
  { label: 'STATUS', value: "OPEN TO SUMMER '26" },
  { label: 'LOCATION', value: 'SINGAPORE' },
  { label: 'FILED', value: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase() },
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
        <h1 className={styles.headline}>
          FULL<br />
          <span className={styles.rust}>STACK</span><br />
          DEV
        </h1>

        <div className={styles.divider} />

        {/* Bio Section */}
        <div className={styles.bioSection}>
          <div className={styles.bioText}>
            <p>
              Year 3 at the National University of Singapore, aspiring data scientist &amp; ML engineer. I like shipping end-to-end systems, getting my hands dirty with messy data, and disappearing into US national parks on weekends I can swing them.
            </p>
          </div>
          <div className={styles.bioSidebar}>
            <span className={styles.bioLabel}>OPEN TO</span>
            <span className={styles.bioValue}>SUMMER &apos;26</span>
            <div className={styles.bioTags}>
              <span>DS</span>
              <span>·</span>
              <span>ML</span>
              <span>·</span>
              <span>INFRA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
