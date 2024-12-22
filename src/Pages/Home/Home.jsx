import React from "react";
import '../../App.css';
import Hero from './Sections/Hero/Hero';
import IntroSection from './Sections/Intro/IntroSection';
import ClientListSection from './Sections/ClientList/ClientListSection';
import MissionStatement from './Sections/MissionStatement/MissionStatement';
import BriefHistory from './Sections/BriefHistory/BriefHistory';
import ProductServiceOverview from './Sections/ProductServiceOverview/ProductServiceOverview';

const Home = () => (
	<>
		<Hero />

		<hr />

		<MissionStatement />

		<hr />

		<IntroSection />

		<hr />

		<ClientListSection />

		<hr />

		<ProductServiceOverview />

		<BriefHistory />
	</>
);

export default Home;
