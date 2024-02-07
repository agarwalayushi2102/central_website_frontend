"use client"

import { useState } from 'react';
import styles from './Navbar.module.css';

const Nav = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'EVENTS', link: '/' },
    { name: 'MEMBERS', link: '/' },
    { name: 'CONTACT', link: '/' },
  ];

  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className={`${styles.favbar} ${open ? styles.open : ''}`}>
        <div className={styles.f}>
          <div>
            <img src="https://media-exp1.licdn.com/dms/image/C510BAQFbp4mBzmTaFw/company-logo_200_200/0/1582205319278?e=2147483647&v=beta&t=u3PIgLO9UashWYyjokBiy2yoWHCo8wKMvBc8_c5q_3g" />
          </div>
          <div className={styles.ya}>
            <h1>Cynaptics Club</h1>
          </div>
        </div>

        <div className={`${styles.link} ${open ? styles.show : ''}`}>
          {Links.map((link, index) => (
            <a key={index} className={styles.lin} href={link.link}>
              {link.name}
            </a>
          ))}
        </div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.bar} ${open ? styles.rotateTopBar : ''}`} />
          <div className={`${styles.bar} ${open ? styles.hideMiddleBar : ''}`} />
          <div className={`${styles.bar} ${open ? styles.rotateBottomBar : ''}`} />
        </button>
      </div>
    </header>
  );
};

export default Nav;
