import responseOfficerSalute from '@assets/armed_response/response_officer_salute.jpg';
import ClientList from './ClientList';
import styles from './ClientListSection.module.css';

const ClientListSection = () => (
	<section className={`section ${styles.flexSection}`}>
		<figure>
			<img src={responseOfficerSalute} alt="Hero Image" />
			<figcaption>Reaction officer on standby in Randpark Ridge.</figcaption>
		</figure>

		<article>
			<div className={styles.content}>
				<h2>The spectrum of our clients we deal with are:</h2>
				<ClientList className="section-text" />
			</div>
		</article>
	</section>
);

export default ClientListSection;

