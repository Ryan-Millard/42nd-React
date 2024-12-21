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

		<IntroSection />

		<hr />

		<ClientListSection />

		<hr />

		<MissionStatement />

		<hr />

		<BriefHistory />

		<ProductServiceOverview />
	</>
);

export default Home;
