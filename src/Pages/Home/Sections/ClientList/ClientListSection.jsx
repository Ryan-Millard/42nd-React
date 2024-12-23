import responseOfficerSalute from '@assets/armed_response/response_officer_salute.jpg';
import ClientList from './ClientList';
import styles from './ClientListSection.module.css';

const ClientListSection = () => (
	<section className="section">
		<div className={styles.flexSection}>
			<div className={styles.content}>
				<h2 className={styles.heading}>Our Main Clients:</h2>
				<ClientList className="section-text" />
			</div>

			<img className={styles.img} src={responseOfficerSalute} alt="Hero Image" />
		</div>
	</section>
);

export default ClientListSection;
