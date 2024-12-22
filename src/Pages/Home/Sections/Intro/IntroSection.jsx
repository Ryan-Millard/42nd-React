import { Link } from 'react-router-dom';
import IntroText from './IntroText';

const IntroSection = () => (
	<section className="section">
		<IntroText className="section-text" />

		<Link className="link" to="/about">Continue Reading...</Link>
	</section>
);

export default IntroSection;
