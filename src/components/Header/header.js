import React from "react";

import styles from "@/components/Header/header.module.css";

export default function Header() {
  return (
    <header className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.logoSearch}>
          <div className={styles.logoContainer}></div>
          <div className={styles.searchContainer}></div>
        </div>

        <div className={styles.menuParentContainer}>
          <div className={styles.menuContainer}>
            <div className={styles.menuContainerItem}></div>
            <div className={styles.menuContainerItem}></div>
            <div className={styles.menuContainerItem}></div>
            <div className={styles.menuContainerItem}></div>
            <div className={styles.menuContainerItem}></div>
          </div>
        </div>

        <div className={styles.profileContainer}>
          <div className={styles.profileItemContainer}></div>
          <div className={styles.profileItemContainer}></div>
          <div className={styles.profileItemContainer}></div>
          <div className={styles.profileItemContainer}></div>
        </div>
      </div>
    </header>
  );
}
