import { Link } from 'react-router-dom';
import DetailsSection from '@components/DetailsSection/DetailsSection';

const MoreInfoLink = ({className}) => <Link className={className} to="/about">Click here for more information...</Link>;

const SectionContent = () => {
	const historyItems = [
		"Founded in 1992, as Max Security & Residential Patrols.",
		"Due to increasing demand, the company evolved to offer permanent and temporary on-site security officers.",
		"Continued expansion of both the response and guard divisions, including close liaison and involvement with all local crime prevention bodies, allowed the company to become the dominant Security Service in the area.",
		"By early 1997 the company was very well established and had already earned an extremely good reputation amongst the community who knew they could rely on Max Security to provide an efficient and reliable service.",
		"In 2002 a name change was applied for and 42nd Precinct Security was born. All clients accepted and embraced the name change and continued to be valuable customers of this company.",
		"The ownership of the company changed March 2004. The company is wholly owned by Allan Millard (MBA), who is the incumbent Managing Director, and has been at the helm ever since.",
		"In 2005, the Electronics Solutions Division was established, to satisfy the ever-growing need of Intrusion Detection Systems in households and enterprise buildings."
	];

	return (
		<ol>
			{historyItems.map((item, index) => <li key={index}>{item}</li>)}
		</ol>
	);
};

const BriefHistory = () => (
	<section className="section-text">
		<DetailsSection
			summaryText="Brief History"
			DetailsLink={MoreInfoLink}
		>
			<SectionContent />
		</DetailsSection>
	</section>
);

export default BriefHistory;
