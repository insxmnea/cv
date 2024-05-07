import styles from "./Footer.module.scss";
import { ReactComponent as GitHubLogo } from "../../assets/icons/github.svg";
import { ReactComponent as TelegramLogo } from "../../assets/icons/telegram.svg";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p>© 2024 all rights reserved</p>
      <div className={styles.iconWrapper}>
        <GitHubLogo className={styles.icon} />
        <TelegramLogo className={styles.icon} />
      </div>
    </footer>
  );
};

export default Footer;
