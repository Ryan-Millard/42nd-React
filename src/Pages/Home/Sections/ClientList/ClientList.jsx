import styles from './ClientList.module.css';

const ClientList = ({className}) => {
	const clients = [
		'Complexes',
		'Schools',
		'Shopping Centres',
		'Private Residences',
		'Businesses',
		'Other Security Services'
	];

	return (
		<ol className={className} aria-label="Client Types">
			{clients.map((client, index) => (
				<li key={index}>{client}</li>
			))}
		</ol>
	);
};

export default ClientList;
