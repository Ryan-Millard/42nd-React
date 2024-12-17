import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@states/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<div
			className={styles.toggleWrapper}
			onClick={toggleTheme}
			role="button"
			aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					toggleTheme();
				}
			}}
		>
			<div
				className={`${styles.toggleButton} ${isDarkMode ? styles.dark : styles.light}`}
				aria-checked={isDarkMode}
				role="switch"
			>
				{isDarkMode ? (
					<FaMoon className={`${styles.icon} ${styles.leftIcon}`} aria-hidden="true" />
				) : (
					<FaSun className={`${styles.icon} ${styles.rightIcon}`} aria-hidden="true" />
				)}
				<div className={styles.dot} aria-hidden="true"></div>
			</div>
		</div>
	);
};

export default ThemeToggle;

