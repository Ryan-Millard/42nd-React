import React from "react";
import { FaHome, FaEnvelope, FaInfoCircle, FaBox, FaBriefcase, FaAngleDoubleRight } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import DoubleRightArrowIcon from './DoubleRightArrowIcon';
import styles from "./Navbar.module.css";
import logo from '@assets/logos/42nd_precinct_logo.png';

const Navbar = () => {
	return (
	<nav className={styles.navbar}>
		<ul className={styles.navbarNav}>
		{/* Logo Section */}
		<li className={styles.logo}>
			<div className={styles.navLink}>
				<div className={styles.logoContent}>
					<span className={styles.logoImgContainer}>
						<Link to="/">
							<img src={logo} alt="Logo" />
						</Link>

						<span>
							<p>Honesty </p><p>Integrity </p><p>Trust</p>
						</span>
					</span>
				</div>
				<DoubleRightArrowIcon className={styles.arrowIcon} />
			</div>
		</li>

		{/* Navigation Items */}
		<NavItem to="/" icon={<FaHome size={50} />} label="Home" />
		<NavItem to="/contact" icon={<FaEnvelope size={50} />} label="Contact Us" />
		<NavItem to="/about" icon={<FaInfoCircle size={50} />} label="About Us" />
		<NavItem to="/products-and-services" icon={<FaBox size={50} />} label="Products & Services" />
		<NavItem to="/careers" icon={<FaBriefcase size={50} />} label="Employment Opportunities" />

		{/* Spacer for bottom */}
		<li className={styles.bottomSpacer}></li>
		</ul>
	</nav>
	);
};

// NavItem component to reduce redundancy
const NavItem = ({ to, icon, label }) => {
	return (
	<li className={styles.navItem}>
		<NavLink
		to={to}
		className={({ isActive }) =>
			isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
		}
		>
		{icon}
		<span className={styles.linkText}>{label}</span>
		</NavLink>
	</li>
	);
};

export default Navbar;
