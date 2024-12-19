import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

// CSS variables for colours in theme
// See App.css for more root styles
const THEME_COLORS = {
	dark: {
		'--text-secondary': '#BBBBBB',
		'--text-tertiary': '#333333',
		'--bg-primary': '#010101',
		'--bg-tertiary': '#1A1A1A',
		'--bg-tertiary-transparent': 'rgba(26, 26, 26, 0.5)',
	},
	light: {
		'--text-secondary': '#222222',
		'--text-tertiary': '#777777',
		'--bg-primary': '#EEEEEE',
		'--bg-tertiary': '#F9F9F9',
		'--bg-tertiary-transparent': 'rgba(249, 249, 249, 0.5)',
	}
};

// Create context with a default value
const ThemeContext = createContext({
	isDarkMode: false,
	toggleTheme: () => {}
});

const ThemeProvider = ({ children }) => {
	// Check the user's browser to find their preferred theme
	const getInitialTheme = useCallback(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) return savedTheme === 'dark';
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}, []);

	// Use state with initial theme
	const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

	// Memoized toggle theme function
	const toggleTheme = useCallback(() => {
		setIsDarkMode(prev => !prev);
	}, []);

	// Use effect for theme application with optional cleanup
	useEffect(() => {
		const theme = isDarkMode ? 'dark' : 'light';
		const themeVariables = THEME_COLORS[theme];

		// Apply theme colors
		Object.entries(themeVariables).forEach(([key, value]) => {
			document.documentElement.style.setProperty(key, value);
		});

		// Save theme to local storage
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);

		// Optional: Cleanup function
		return () => {
			Object.keys(themeVariables).forEach(key => {
				document.documentElement.style.removeProperty(key);
			});
		};
	}, [isDarkMode]);

	// Memoize context value to prevent unnecessary re-renders
	const contextValue = useMemo(() => ({
		isDarkMode,
		toggleTheme
	}), [isDarkMode, toggleTheme]);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};

// Custom hook with error handling
const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export { ThemeContext };
export { ThemeProvider };
export { useTheme };
