import styles from './DetailsSection.module.css';
import PropTypes from 'prop-types';

const DetailsSection = ({ summaryText, children, open = false, DetailsLink }) => (
	<details open={open} className={styles.details}>
		<summary className={styles.summary}>{summaryText}</summary>

		<article>{children}</article>

		{DetailsLink && <DetailsLink className={`link ${styles.myLink}`} />} {/* Render the DetailsLink JSX element if provided */}
	</details>
);

DetailsSection.propTypes = {
	summaryText: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	open: PropTypes.bool,
	DetailsLink: PropTypes.elementType
};

export default DetailsSection;
