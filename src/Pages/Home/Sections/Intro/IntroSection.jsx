import React, { Suspense } from 'react';
import styles from './IntroSection.module.css';
import IntroText from './IntroText';

const BusinessCard = React.lazy(() => import('@components/BusinessCard/BusinessCard'));

const IntroSection = () => (
	<section>
		<h1 className={`roboto-black-italic ${styles.heading}`}>Honesty, Integrity & Trust</h1>

		<div className={styles.businessCard}>
			<Suspense fallback={<div className={styles.businessCardFallback}>Loading...</div>}>
				<BusinessCard />
			</Suspense>
		</div>

		<IntroText className={`section-text`} />
	</section>
);

export default IntroSection;
