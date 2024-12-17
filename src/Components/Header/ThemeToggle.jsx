import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
		// Retrieve initial theme from local storage or system preference
		const getInitialTheme = () => {
				const savedTheme = localStorage.getItem('theme');

				// If a theme is saved in local storage, use that
				if (savedTheme) {
						return savedTheme === 'dark';
				}

				// Otherwise, check system preference
				return window.matchMedia('(prefers-color-scheme: dark)').matches;
		};

		const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

		const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

		useEffect(() => {
				// Apply theme colors
				const theme = isDarkMode ? 'dark' : 'light';
				const themeColors = {
						dark: {
								'--text-primary': '#FAA61A',
								'--text-secondary': '#BBBBBB',
								'--text-tertiary': '#333333',
								'--bg-primary': '#010101',
								'--bg-secondary': '#FAA61A',
								'--bg-tertiary': '#1A1A1A',
								'--transition-speed': '0.3s'
						},
						light: {
								'--text-primary': '#333333',
								'--text-secondary': '#666666',
								'--text-tertiary': '#FFFFFF',
								'--bg-primary': '#FFFFFF',
								'--bg-secondary': '#333333',
								'--bg-tertiary': '#F1F1F1',
								'--transition-speed': '0.3s'
						}
				};

				// Apply theme colors
				Object.entries(themeColors[theme]).forEach(([key, value]) => {
						document.documentElement.style.setProperty(key, value);
				});

				// Save theme to local storage
				localStorage.setItem('theme', theme);

				// Add data attribute for global styling
				document.documentElement.setAttribute('data-theme', theme);
		}, [isDarkMode]);

		useEffect(() => {
				// Listen for system theme changes
				const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
				
				const handleThemeChange = (e) => {
					// Only change theme if no theme is saved in local storage
					if (!localStorage.getItem('theme')) {
							setIsDarkMode(e.matches);
					}
				};

				// Add listener
				mediaQuery.addEventListener('change', handleThemeChange);

				// Clean up listener
				return () => {
						mediaQuery.removeEventListener('change', handleThemeChange);
				};
		}, []);

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
