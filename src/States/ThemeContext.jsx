import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ThemeContext = createContext();

// Create provider component
export const ThemeProvider = ({ children }) => {
	const getInitialTheme = () => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
	};

	const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

	const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

	useEffect(() => {
		const theme = isDarkMode ? 'dark' : 'light';
		const themeColors = {
			dark: {
				'--text-primary': '#FAA61A',
				'--text-secondary': '#BBBBBB',
				'--text-tertiary': '#333333',
				'--bg-primary': '#010101',
				'--bg-secondary': '#FAA61A',
				'--bg-tertiary': '#1A1A1A',
			},
			light: {
				'--text-primary': '#FAA61A',
				'--text-secondary': '#222222',
				'--text-tertiary': '#B0B0B0',
				'--bg-primary': '#EEEEEE',
				'--bg-secondary': '#FAA61A',
				'--bg-tertiary': '#F9F9F9',
			}
		};

		// Apply theme colors
		Object.entries(themeColors[theme]).forEach(([key, value]) => {
			document.documentElement.style.setProperty(key, value);
		});

		// Save theme to local storage
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}, [isDarkMode]);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Custom hook to use theme context
const useTheme = () => useContext(ThemeContext);

export { ThemeContext, useTheme };
