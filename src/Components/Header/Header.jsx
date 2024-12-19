import { Link } from "react-router-dom";
import { GiRotaryPhone } from "react-icons/gi";
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@states/ThemeContext';
import styles from "./Header.module.css";
import logo from "@assets/logos/42nd_precinct_logo.png";
import lightBackground from "@assets/backgrounds/light_checkered_steel_background.jpg";
import darkBackgroundImage from "@assets/backgrounds/dark_checkered_steel_background.jpg";

const Header = () => {
	// change the background image based on the current theme
	const { isDarkMode } = useTheme();
	const background = isDarkMode ? darkBackgroundImage : lightBackground;

	return (
		<header
			className={styles.headerWrapper}
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 85%, var(--bg-primary)), url(${background})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<ThemeToggle />

			<Link to="/">
				<img className={styles.logo} src={logo} alt="logo" />
			</Link>

			<a href="tel:0117916340" style={{ textDecoration: "none", color: "inherit" }}>
				<figure style={{ display: "inline-block", textAlign: "center" }}>
					<GiRotaryPhone className={styles.icon} />
				</figure>
			</a>
		</header>
	);
};

export default Header;
