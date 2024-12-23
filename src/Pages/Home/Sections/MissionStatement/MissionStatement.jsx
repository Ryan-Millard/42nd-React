import React, { Suspense } from 'react';

const BusinessCard = React.lazy(() => import('@components/BusinessCard/BusinessCard'));
import styles from './MissionStatement.module.css'

const MissionStatement = () => (
	<section className="section">
		<h2>Mission Statement</h2>
		<p className={`section-text ${styles.pText}`}>To grow organically and promote innovation. We will deliver services to our clients upholding core values of Honesty, Integrity, and Trust (HIT). In addition, we will strive to become recognized as a reliable leading supplier of quality pro-active security services.</p>

		<Suspense fallback={<div className={styles.businessCardFallback}>Loading...</div>}>
			<BusinessCard />
		</Suspense>
	</section>
);

export default MissionStatement;
