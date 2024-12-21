import { Link } from 'react-router-dom';
import DetailsSection from '@components/DetailsSection/DetailsSection';

const MoreInfoLink = ({className}) => <Link className={className} to="/products-and-services">Click here for more information...</Link>;

const ProductServiceOverview = () => (
	<section className="section-text">
		<DetailsSection
			summaryText="Overview of Products & Services"
			DetailsLink={MoreInfoLink}
		>
			<ol>
				<li>Security Officers guarding Service permanent and ADHOC.</li>
				<li>Armed Response</li>
				<li>CCTV new and repairs</li>
				<li>Off-Site Monitoring</li>
				<li>Electric Fencing</li>
				<li>Perimeter Detection new and repairs</li>
				<li>Gate Motors new and repairs</li>
				<li>Alarms</li>
				<li>Panic Systems</li>
				<li>Intercom Systems new and repairs</li>
				<li>Access Control</li>
				<li>Perimeter Detection</li>
				<li>Biometrics</li>
				<li>Burglar Bars – Metal or Polycarbonate Armed Bar or Standard Bar</li>
				<li>Maintenance Contracts</li>
				<li>Solar to gate motors and intercoms</li>
			</ol>
		</DetailsSection>
	</section>
);

export default ProductServiceOverview;
