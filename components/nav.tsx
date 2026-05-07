'use client';

import { useState, useEffect } from 'react';
import styles from './nav.module.css';

interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  static?: boolean;
}

const navItems: NavItem[] = [
  { label: 'e1121317@u.nus.edu', static: true },
  { label: 'GITHUB', href: 'https://github.com/justinwong2', external: true },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/justinwong2/', external: true },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        {/* Brand cell */}
        <a href="#" className={`${styles.cell} ${styles.brand}`} onClick={() => setIsMenuOpen(false)}>
          <span className={styles.bracket}>[</span>J<span className={styles.bracket}>]</span>USTIN
        </a>

        {/* Desktop nav items */}
        <div className={styles.desktopNav}>
          {navItems.map((item) =>
            item.static ? (
              <span key={item.label} className={`${styles.cell} ${styles.cellStatic}`}>
                {item.label}
              </span>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={styles.cell}
                onClick={(e) => item.href && handleClick(e, item.href)}
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.label}
                {item.external && <span className={styles.arrow}> ↗</span>}
              </a>
            )
          )}
        </div>

        {/* Meta cell - desktop only */}
        <div className={`${styles.cell} ${styles.meta}`}>
          SG
        </div>

        {/* Mobile hamburger button */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

      </div>

      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMenuOpen(false)}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) =>
              item.static ? (
                <span key={item.label} className={`${styles.mobileItem} ${styles.mobileItemStatic}`}>
                  {item.label}
                </span>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.mobileItem}
                  onClick={(e) => item.href && handleClick(e, item.href)}
                  {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {item.label}
                  {item.external && <span className={styles.arrow}> ↗</span>}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
