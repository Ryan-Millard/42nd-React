import styles from './Hero.module.css';

const Hero = () => (
	<section className={`section ${styles.containerSection}`}>
		<h1 className={`roboto-black-italic ${styles.heading}`}>Honesty, Integrity & Trust</h1>

		<p className={styles.hook}>30 years of expertise, protecting what matters most.</p>
	</section>
);

export default Hero;
