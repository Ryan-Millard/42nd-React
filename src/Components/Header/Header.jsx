import { useEffect, useState, useRef } from 'react';
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
	const [background, setBackground] = useState('');
	const headerRef = useRef(null);

	// Lazy load background image
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					const bgImage = isDarkMode ? darkBackgroundImage : lightBackground;
					setBackground(bgImage);
					observer.disconnect(); // Stop observing once background is set
				}
			},
			{ threshold: 0.1 } // Load when 10% of the header is visible
		);

		if (headerRef.current) {
			observer.observe(headerRef.current);
		}

		return () => {
			if (headerRef.current) {
				observer.unobserve(headerRef.current);
			}
		};
	}, [isDarkMode]);

	return (
		<header
			ref={headerRef}
			className={styles.headerWrapper}
			style={{
				backgroundImage: background
					? `linear-gradient(to bottom, rgba(0,0,0,0) 85%, var(--bg-primary)), url(${background})`
					: 'none',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<ThemeToggle />

			<Link to="/">
				<img className={styles.logo} src={logo} alt="logo" />
			</Link>

			<a href="tel:0117916340" className={styles.telephoneLink}>
				<figure className={styles.telephoneFigure}>
					<GiRotaryPhone className={styles.icon} />
					<figcaption className={ `roboto-black ${styles.hotline}` }>011 791 6340</figcaption>
				</figure>
			</a>
		</header>
	);
};

export default Header;

