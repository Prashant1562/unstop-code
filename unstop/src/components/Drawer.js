import { useEffect } from "react";
import styles from "./Drawer.module.css";
const Drawer = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.drawer} data-animate-on-scroll>
      <div className={styles.frameParent}>
        <input className={styles.frameChild} type="text" placeholder="Menu" />
        <div className={styles.frameWrapper}>
          <div className={styles.dashboardParent}>
            <img className={styles.dashboardIcon} alt="" src="/dashboard.svg" />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.noteAltParent}>
            <img className={styles.noteAltIcon} alt="" src="/note-alt.svg" />
            <div className={styles.assessment}>Assessment</div>
          </div>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.dashboardParent}>
            <img className={styles.noteAltIcon} alt="" src="/quiz.svg" />
            <div className={styles.dashboard}>My Library</div>
          </div>
        </div>
      </div>
      <img className={styles.drawerChild} alt="" src="/vector-267.svg" />
      <div className={styles.drawerInner}>
        <div className={styles.frameDiv}>
          <div className={styles.dashboardParent}>
            <img className={styles.noteAltIcon} alt="" src="/admin-meds.svg" />
            <div className={styles.dashboard}>Round Status</div>
          </div>
          <div className={styles.adminWrapper}>
            <div className={styles.admin}>Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
