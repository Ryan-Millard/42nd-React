import React from "react";

const INTRO_TEXT = `Based in Ferndale, Johannesburg, 42nd Precinct Security offers security solutions in and around Gauteng. Our main clients consist of various schools, shopping centres, townhouse and building complexes, as well as buildings and office blocks. We provide security solutions in many forms, ranging from response officers to intrusion detection systems that can be remotely managed using a mobile app.

At 42nd Precinct Security we pride ourselves on the three decades of quality pro-active services we offer to all our clients.

This includes not only the service but the personal involvement of every member of our Management Team at each of the sites we manage for you, on your behalf.

We offer guarding, solar, and electronic security solutions, and any other security related requirements you may have, such as fencing, welding etc...

We further offer monthly or weekly maintenance programmes on all electronic equipment whether new or pre-existing installations.

We believe that with strong management of our services and a good business relationship with you, our customer, we can forge lasting mutual benefits, which we believe surpass industry standards.`;


const About = () => {
	return (
		<div>
			<h1>About Us</h1>
			<p>Learn more about the 42nd Precinct and what we do.</p>

		<section className="section">
				<p className={`section-text`}>
					{INTRO_TEXT.split('\n\n').map((paragraph, index) => (
						<React.Fragment key={index}>
							{paragraph}
							<br /><br />
						</React.Fragment>
					))}
				</p>
		</section>
		</div>
	);
};

export default About;
