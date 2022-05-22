import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { user, authIsReady } = useAuthContext();
  const { logout } = useLogout();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/" id={styles.name}>
            PomodoroQuest
          </Link>
        </li>
        <li>{!user && <Link to="login">Login</Link>}</li>
        <li>{!user && <Link to="signup">Signup</Link>}</li>
        <li>
          {user && (
            <button
              className="btn "
              onClick={logout}
              style={{ marginRight: "15px" }}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
