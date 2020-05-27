import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResponsiveImage = styled.img`
	display: block;
	height: auto;
	max-width: 100%;
`;

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" />
		<div className="container page-header"><h2>Contact</h2></div>

		<div className="container">
			<div className="row sb65">
				<div className="col-md-5">
					<address>
						<strong>Child of Mercy Orphanage Centre (COMOC)</strong>
						<br />
							P.O. Box: 1251-80100, Mombasa<br />
							Phone +254 721788731 or +254 703137337<br />
							<a href="mailto:childofmercycentre_2010@yahoo.com">childofmercycentre_2010@yahoo.com</a>
					</address>
					<p>
						E-Mail contact Germany:
						<a href="mailto:maren-wittenberg@web.de">Maren Wittenberg</a>
					</p>
					<p>
						E-Mail contact UK:
						<a href="mailto:info@aid4orphans.com">Peter Bragg</a>
					</p>
					<p>
						Concept, design, implementation:
						<a href="https://larswittenberg.de/" target="_blank" rel="noopener noreferrer">Lars Wittenberg</a>
					</p>
				</div>
				<div className="col-md-7">
					<a href="https://www.google.com/maps/place/-4.085521,39.672258/" target="_blank" rel="noopener noreferrer">
						<ResponsiveImage src="https://maps.googleapis.com/maps/api/staticmap?center=-4.075521,39.672258&zoom=14&scale=1&size=640x500&maptype=roadmap&key=AIzaSyDlwFh4f3pgBAq0eZ0gLHbHWWz99VU8SU0&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C-4.085521,39.672258" alt="Google Map of -4.075521,39.672258"/>
					</a>
				</div>
			</div>
		</div>

	</Layout>
)

export default ContactPage
