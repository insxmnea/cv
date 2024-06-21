import styles from "./Footer.module.scss";
import { ReactComponent as GitHubLogo } from "../../assets/icons/github.svg";
import { ReactComponent as TelegramLogo } from "../../assets/icons/telegram.svg";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p>© 2024 all rights reserved</p>
      <div className={styles.iconWrapper}>
        <a
          className={styles.iconLink}
          href="https://github.com/insxmnea"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogo className={styles.icon} />
        </a>
        <a
          className={styles.iconLink}
          href="https://t.me/insxmnea"
          target="_blank"
          rel="noreferrer"
        >
          <TelegramLogo className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
