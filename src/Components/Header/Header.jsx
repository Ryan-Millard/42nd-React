import { Link } from "react-router-dom";
import { GiPoliceCar } from "react-icons/gi";
import ThemeToggle from './ThemeToggle';

import styles from "./Header.module.css";
import logo from "@assets/42nd-precinct-logo.png";

const Header = () => {
	return (
		<header className={styles.headerWrapper}>
			<ThemeToggle />

			<Link to="/">
				<img className={styles.logo} src={logo} alt="logo" />
			</Link>

			<a href="tel:0117916340" style={{ textDecoration: "none", color: "inherit" }}>
				<figure style={{ display: "inline-block", textAlign: "center" }}>
					<GiPoliceCar className={styles.icon} />
				</figure>
			</a>
		</header>
	);
};

export default Header;
