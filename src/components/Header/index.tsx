import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.title}>1317n0d3</div>
      <div className={styles.links}>
        {/* <Link to={'/home'} className='current'>home</Link> */}
        {/* <a className='link'>works</a>
        <a className='link'>about-me</a>
        <a className='link'>contacts</a> */}
        {/* <div>EN</div> */}
      </div>
    </header>
  );
}

export default Header;
