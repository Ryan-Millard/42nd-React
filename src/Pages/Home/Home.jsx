import React from "react";
import '../../App.css';
import styles from './Home.module.css';
import responseOfficerSalute from '@assets/response-officer-salute.jpg';
import IntroSection from './Sections/Intro/IntroSection';
import ClientList from './ClientList';

const Home = () => {
	return (
		<>
			<IntroSection />

			<hr />

			<figure>
				<img src={responseOfficerSalute} className={styles.responseOfficerImg} alt="Hero Image" />
				<figcaption>Reaction officer on standby in Randpark Ridge.</figcaption>
			</figure>

			<div id={styles.intro}>
				<div className={styles.content}>
					<h2>The spectrum of our clients we deal with are:</h2>
					<ClientList />
				</div>
			</div>
		</>
	);
};

export default Home;

