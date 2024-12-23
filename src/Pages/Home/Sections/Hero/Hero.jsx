import styles from './Hero.module.css';

import Carousel from '@components/Carousel/Carousel';

// Images for Carousel
import access_control from '@assets/adverts/access_control_advert.jpg';
import cctv from '@assets/adverts/cctv_advert.jpg';
import mission_first_customer_always from '@assets/adverts/mission_first_customer_always_advert.jpg';
import alarm_systems from '@assets/adverts/alarm_systems_advert.jpg';
import electric_fencing_advert from '@assets/adverts/electric_fencing_advert.jpg';
import security_guards from '@assets/adverts/security_guards_advert.jpg';
import armed_response_advert from '@assets/adverts/armed_response_advert.jpg';
import electronic_solutions_advert from '@assets/adverts/electronic_solutions_advert.jpg';
import we_keep_watch_so_you_dont_have_to_advert from '@assets/adverts/we_keep_watch_so_you_dont_have_to_advert.jpg';
import burglar_bars_advert from '@assets/adverts/burglar_bars_advert.jpg';
import gate_motors_advert from '@assets/adverts/gate_motors_advert.jpg';
import your_home_our_protection_advert from '@assets/adverts/your_home_our_protection_advert.jpg';

const images = [
	{ src: access_control, alt: 'Access Control System' },
	{ src: cctv, alt: 'CCTV Surveillance Systems' },
	{ src: mission_first_customer_always, alt: 'Mission: First Customer, Always' },
	{ src: alarm_systems, alt: 'Alarm Systems for Security' },
	{ src: electric_fencing_advert, alt: 'Electric Fencing for Protection' },
	{ src: security_guards, alt: 'Professional Security Guards' },
	{ src: armed_response_advert, alt: 'Armed Response Services' },
	{ src: electronic_solutions_advert, alt: 'Electronic Security Solutions' },
	{ src: we_keep_watch_so_you_dont_have_to_advert, alt: 'We Keep Watch, So You Don’t Have To' },
	{ src: burglar_bars_advert, alt: 'Burglar Bars for Home Security' },
	{ src: gate_motors_advert, alt: 'Gate Motors for Secure Entry' },
	{ src: your_home_our_protection_advert, alt: 'Your Home, Our Protection' },
];

const Hero = () => (
	<section className="section">
		<h1 className={`roboto-black-italic ${styles.heading}`}>Honesty, Integrity & Trust</h1>

		<Carousel
			images={images}
			autoplay={true}
			autoplayInterval={3000}
		/>
	</section>
);

export default Hero;
