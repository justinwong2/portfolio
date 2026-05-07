'use client';

import { useState } from 'react';
import { photos } from '@/data/photos';
import { PhotoSlide } from './photo-slide';
import styles from './photo-carousel.module.css';

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = photos.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.carousel}>
      {/* Previous button */}
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={goToPrev}
        aria-label="Previous photo"
      >
        ←
      </button>

      {/* Slide track */}
      <div className={styles.track}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo) => (
            <PhotoSlide key={photo.id} photo={photo} total={total} />
          ))}
        </div>
      </div>

      {/* Next button */}
      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={goToNext}
        aria-label="Next photo"
      >
        →
      </button>
    </div>
  );
}
