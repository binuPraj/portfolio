'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experiences', label: 'Experience' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu} aria-label="Binu Prajapati — Home" className={styles.logoLink}>
            <span className={styles.logoBadge}>BP</span>
            <span className={styles.logoName}>Binu<span className={styles.logoDot}>.</span></span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.navLinks} aria-label="Main Navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`${styles.navItem} ${isActive ? styles.activeItem : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
                {isActive && <span className={styles.activePill} />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/contact" className={styles.ctaBtn} id="nav-contact-cta">
            <span>Get in Touch</span>
            <ArrowUpRight size={14} className={styles.ctaIcon} />
          </Link>

          <button
            className={`${styles.mobileToggle} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ''}`}>
          <div className={styles.mobileLinks}>
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`${styles.mobileNavItem} ${isActive ? styles.mobileActiveItem : ''}`}
                >
                  {label}
                </Link>
              );
            })}
            <div className={styles.mobileCtaWrap}>
              <Link href="/contact" onClick={closeMenu} className={styles.mobileCtaBtn}>
                Get in Touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
