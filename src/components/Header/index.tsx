import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>klltx</div>
      <div className='flex'>
        <a className={styles.current}>home</a>
        <a className={styles.link}>works</a>
        <a className={styles.link}>about-me</a>
        <a className={styles.link}>contacts</a>
        {/* <div>EN</div> */}
      </div>
    </header>
  );
}

export default Header;
