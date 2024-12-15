import React from "react";
import '../../App.css';
import IntroSection from './Sections/Intro/IntroSection';
import ClientListSection from './Sections/ClientList/ClientListSection';

const Home = () => (
	<>
		<IntroSection />

		<hr />

		<ClientListSection />
	</>
);

export default Home;

