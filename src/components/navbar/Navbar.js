import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/" id={styles.name}>
            PomodoroQuest
          </Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
