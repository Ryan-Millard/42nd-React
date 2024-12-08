import React from "react";
import '../../App.css';
import './Home.css';
import BusinessCard from './../../Components/BusinessCard/BusinessCard';

const ClientList = () => (
	<ol>
		<li>Complexes</li>
		<li>Schools</li>
		<li>Shopping Centres</li>
		<li>Private Residences</li>
		<li>Businesses</li>
		<li>Other Security Services</li>
	</ol>
);

const Home = () => {
	return (
	<section id="home">
		<h1 className="roboto-black-italic">Honesty, Integrity & Trust</h1>

		<div id="intro">
			<div className="content">
			  <h2 className="heading">The spectrum of our clients we deal with are:</h2>
			  <ClientList />
			</div>
		</div>

		<BusinessCard />
	</section>
  );
};

export default Home;

