import type { Photo } from '@/data/photos';
import styles from './photo-slide.module.css';

interface PhotoSlideProps {
  photo: Photo;
  total: number;
}

export function PhotoSlide({ photo, total }: PhotoSlideProps) {
  const indexStr = String(photo.index).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');

  return (
    <div className={styles.slide}>
      {/* Image placeholder - using a colored div since we don't have actual images */}
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderText}>{photo.label}</span>
        </div>
      </div>

      {/* Meta panel */}
      <aside className={styles.meta}>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>CAPTURE</span>
          <span className={styles.metaValue}>{photo.label}</span>
        </div>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>DATE</span>
          <span className={styles.metaValue}>{photo.date}</span>
        </div>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>INDEX</span>
          <span className={styles.metaValue}>{indexStr}/{totalStr}</span>
        </div>
      </aside>
    </div>
  );
}
