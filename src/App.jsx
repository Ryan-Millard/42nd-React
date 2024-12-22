import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@states/ThemeContext";

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import ProductsAndServices from "./Pages/ProductsAndServices/ProductsAndServices";
import Careers from "./Pages/Careers/Careers";
import NotFound from "./Pages/404/NotFound";

import "./App.css";
import "./fonts/roboto.css";

function App() {
	return (
		<ThemeProvider>
			<Router>
				<div className="roboto">
					<Navbar />

					<div className="pageContainer">
						<Header />

						<main>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/about" element={<About />} />
								<Route path="/products-and-services" element={<ProductsAndServices />} />
								<Route path="/careers" element={<Careers />} />

								<Route path="*" element={<NotFound />} />
							</Routes>
						</main>

						<Footer />
					</div>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;

