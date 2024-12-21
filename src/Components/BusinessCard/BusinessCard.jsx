import React, { useState } from 'react';
import Front from './Sides/Front/Front';
import Back from './Sides/Back/Back';
import styles from './BusinessCard.module.css';

const BusinessCard = ({className}) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const toggleFlip = () => {
		setIsFlipped((prev) => !prev);
	};

	return (
		<aside className={`${styles.componentContainer} ${className}`}>
			<div className={styles.cardContainer} onClick={toggleFlip}>
				<div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
					<Front />
					<Back />
				</div>
			</div>
			<h3 className={`text-primary ${styles.heading}`}>Click to flip the card</h3>
		</aside>
	);
};

export default BusinessCard;
