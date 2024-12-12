import React, { useState } from 'react';
import Front from './Sides/Front/Front';
import Back from './Sides/Back/Back';
import styles from './BusinessCard.module.css';

const BusinessCard = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const toggleFlip = () => {
		setIsFlipped((prev) => !prev);
	};

	return (
		<aside className={styles.componentContainer}>
			<h2 className={`text-primary ${styles.heading}`}>Click to flip the card</h2>
			<div className={styles.cardContainer} onClick={toggleFlip}>
				<div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
					<Front />
					<Back />
				</div>
			</div>
		</aside>
	);
};

export default BusinessCard;
