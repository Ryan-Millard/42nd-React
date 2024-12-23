import React from "react";
import '../../App.css';
import Hero from './Sections/Hero/Hero';
import MissionStatement from './Sections/MissionStatement/MissionStatement';
import WhoAreWe from './Sections/WhoAreWe/WhoAreWe';
import ClientListSection from './Sections/ClientList/ClientListSection';
import BriefHistory from './Sections/BriefHistory/BriefHistory';
import ProductServiceOverview from './Sections/ProductServiceOverview/ProductServiceOverview';

const Home = () => (
	<>
		<Hero />

		<hr />

		<MissionStatement />

		<hr />

		<WhoAreWe />

		<hr />

		<ClientListSection />

		<hr />

		<ProductServiceOverview />

		<BriefHistory />
	</>
);

export default Home;
