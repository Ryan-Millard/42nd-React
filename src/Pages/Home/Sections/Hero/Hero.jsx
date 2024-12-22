import React, { Suspense } from 'react';
import styles from './Hero.module.css';

const BusinessCard = React.lazy(() => import('@components/BusinessCard/BusinessCard'));

const Hero = () => (
	<section className="section">
		<h1 className={`roboto-black-italic ${styles.heading}`}>Honesty, Integrity & Trust</h1>

		<Suspense fallback={<div className={styles.businessCardFallback}>Loading...</div>}>
			<BusinessCard className={styles.businessCard} />
		</Suspense>
	</section>
);

export default Hero;
