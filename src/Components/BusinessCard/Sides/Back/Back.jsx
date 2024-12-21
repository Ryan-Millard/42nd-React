import react from 'react';
import { useTheme } from '@states/ThemeContext';
import styles from './Back.module.css';

const ServiceList = ({title, items}) => {
	return (
		<ul>
			<span className="roboto roboto-black">{title}</span>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

const Back = () => {
	const { isDarkMode } = useTheme();

	const guardingDivisionItems = [
		'Road Closures & Boomed Areas',
		'Security Cashiers',
		'Doormen',
		'Schools & Shopping Centres',
		'Houses, Flats',
		'Housing Complexes',
		'Temporary Building Sites',
		'Security On Request',
		'VIP Protection',
		'Event Management',
	];

	const electronicSolutionsItems = [
		'CCTV Systems & Intercoms',
		'Time & Attendance',
		'GSM Modules',
		'Alarm Systems (Wired & Wireless)',
		'Perimeter Detection',
		'Remotes',
		'Electric Fencing & Gate Motors',
		'Access Control',
		'Armed Response',
		'Armed Bars',
	];

	return (
		<div className={styles.back}>
			<div
				className={styles.backWrapper}
				style={{
					backgroundColor: isDarkMode ? 'black' : 'white',
				}}
			>
				<div
					className={styles.backContent}
					style={{
						backgroundColor: isDarkMode ? 'var(--bg-secondary)' : '#FAA61A',
					}}
				>
					<ServiceList title="GUARDING DIVISION" items={guardingDivisionItems} />
					<ServiceList title="ELECTRONIC SOLUTIONS" items={electronicSolutionsItems} />
				</div>

				<div
					className={styles.backFooter}
					style={{
						color: isDarkMode ? 'var(--text-primary)' : 'black',
					}}
				>
					24-HOUR HOTLINE: 010 441 2509
				</div>
			</div>
		</div>
	);
};

export default Back;
