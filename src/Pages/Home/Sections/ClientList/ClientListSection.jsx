import responseOfficerSalute from '@assets/response-officer-salute.jpg';
import ClientList from './ClientList';
import styles from './ClientListSection.module.css';

const ClientListSection = () => (
	<section className="section">
		<figure>
			<img src={responseOfficerSalute} alt="Hero Image" />
			<figcaption>Reaction officer on standby in Randpark Ridge.</figcaption>
		</figure>

		<div className={styles.content}>
			<h2 className="roboto-black">The spectrum of our clients we deal with are:</h2>
			<ClientList />
		</div>
	</section>
);

export default ClientListSection;
