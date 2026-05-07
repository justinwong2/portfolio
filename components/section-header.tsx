import styles from './section-header.module.css';

interface SectionHeaderProps {
  number: string;
  title: string;
  count?: number;
}

export function SectionHeader({ number, title, count }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.numberCell}>
        <span className={styles.number}>№ {number}</span>
      </div>
      <div className={styles.titleCell}>
        <span className={styles.title}>{title}</span>
      </div>
      {count !== undefined && (
        <div className={styles.countCell}>
          <span className={styles.count}>{count} {count === 1 ? 'ENTRY' : 'ENTRIES'}</span>
        </div>
      )}
    </header>
  );
}
