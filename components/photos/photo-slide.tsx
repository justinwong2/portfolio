import type { Photo } from '@/data/photos';
import styles from './photo-slide.module.css';

interface PhotoSlideProps {
  photo: Photo;
}

export function PhotoSlide({ photo }: PhotoSlideProps) {
  const imageCount = photo.images.length;
  const gridClass = imageCount === 4 ? styles.grid4 : styles.grid2;

  return (
    <div className={styles.slide}>
      <div className={`${styles.imageWrapper} ${gridClass}`}>
        {photo.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${photo.label} ${i + 1}`}
            className={styles.image}
          />
        ))}
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
          <span className={styles.metaLabel}>DESCRIPTION</span>
          <span className={styles.metaValue}>{photo.description}</span>
        </div>
      </aside>
    </div>
  );
}
