import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import styles from './IntroSection.module.css';
import IntroText from './IntroText';

const BusinessCard = React.lazy(() => import('@components/BusinessCard/BusinessCard'));

const IntroSection = () => (
	<section className="section">
		<Suspense fallback={<div className={styles.businessCardFallback}>Loading...</div>}>
			<BusinessCard className={styles.businessCard} />
		</Suspense>

		<IntroText className="section-text" />

		<Link className="link" to="/about">Click here for more information...</Link>
	</section>
);

export default IntroSection;
