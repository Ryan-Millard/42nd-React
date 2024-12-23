import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WhoAreWe.module.css';

import biometricsImage from '@assets/access_control/access_control_biometrics_yellow_alternative.webp';

const INTRO_TEXT = `With over 30 years of experience, 42nd Precinct Security provides trusted, top-tier security solutions across Gauteng. From armed response and advanced electronic systems to maintenance and personalized service, we stand apart in an industry where few last as long. Discover how we can secure your business or home.`;

const WhoAreWe = () => (
	<section className="section">
		<div className={styles.halfSplit}>
			<img src={biometricsImage} alt="Fingerprint" className={styles.image} loading="lazy" />

			<div className={styles.textContainer}>
				<h2 className={styles.heading}>Who Are We?</h2>

				{INTRO_TEXT.split('\n\n').map((paragraph, index) => (
					<p key={index} className={`section-text ${styles.paragraph}`}>
						{paragraph}
					</p>
				))}

				<Link className="link" to="/about">Continue Reading...</Link>
			</div>
		</div>
	</section>
);

export default WhoAreWe;
