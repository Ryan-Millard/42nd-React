import React from "react";
import '../../App.css';
import IntroSection from './Sections/Intro/IntroSection';
import ClientListSection from './Sections/ClientList/ClientListSection';
import MissionStatement from './Sections/MissionStatement/MissionStatement';
import BriefHistory from './Sections/BriefHistory/BriefHistory';
import ProductServiceOverview from './Sections/ProductServiceOverview/ProductServiceOverview';

const Home = () => (
	<>
		<IntroSection />

		<hr />

		<ClientListSection />

		<hr />

		<MissionStatement />

		<hr />

		<ProductServiceOverview />

		<BriefHistory />
	</>
);

export default Home;
