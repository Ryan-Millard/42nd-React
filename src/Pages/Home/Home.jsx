import React from "react";
import '../../App.css';
import IntroSection from './Sections/Intro/IntroSection';
import ClientListSection from './Sections/ClientList/ClientListSection';
import MissionStatement from './Sections/MissionStatement/MissionStatement';

const Home = () => (
	<>
		<IntroSection />

		<hr />

		<ClientListSection />

		<hr />

		<MissionStatement />
	</>
);

export default Home;
