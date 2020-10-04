import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Polaroid from "../components/polaroid"

const ProjectsPage = () => (
	<Layout>
		<SEO title="Projects" />
		<div className="container page-header"><h2>Projects</h2></div>

		<div className="container">
			<div className="row sb65">
				<div className="col-md-6">
					<h3>Our future plans</h3>
					<p className="sb-small">Our everyday expenses that we need help with are food,
						medical care, staff wages, water / electricity and house maintenance.</p>
					<Polaroid alt="Rice and beans" filename="projects-rice-and-beans.jpg" extraClassName="polaroid-left" />
					<p>Our next big project is to complete the building of the Dining room which
						will be a roof, windows, tiled floor and then seating for the children.</p>
					<p>Our dream for the future includes a new block for the older children to live
						in so that we can separate the ages. They currently sleep together from 5 - 13
						years which is ok but soon the older children will be too big to be sleeping
						with small children so we need to separate 4 - 12 years and 13 years upwards. We
						have the space but not the money. This will also allow us to take in more
						children who live on the streets or are neglected.</p>
					<p>We also want to build our own Nursery school classrooms so that the smaller
						ones can stay within the compound and also the future volunteers can get
						involved a lot more. We believe that if we employ our own teacher and run the
						school we can give the younger children a better standard of education.</p>
				</div>
				<div className="col-md-6">
					<p className="sb-small st-no-headline">We also run a sponsorship scheme which covers
						school fees at Primary School. Our desire is for all the children to go to
						boarding school where they will get a much better standard of education. The
						scheme covers school fees but we have to find the boarding fees and transport
						fees extra. From January we will have several children at Boarding School that
						we will need to find the extra costs for.</p>
					<Polaroid alt="Tution at home" filename="projects-tution-at-home.jpg"/>
					<p>And then - one day in the future - we would like to have our own Matatu
						(minibus) to transport the children around Mombasa, take them on outings and
						collect Volunteers from the airport.</p>
					<p className="sb-small">We always make sure that when a donation is made, it is used
						for whatever purpose the donor wanted it to be used for unless they specifically
						say that we can choose.</p>
					<Polaroid
						alt="Kitchen without roof"
						filename="projects-kitchen-without-roof.jpg"/>
				</div>
			</div>

			<div className="row sb65">
				<div className="col-md-8">
					<Polaroid alt="Asante Sana" filename="asante-sana.jpg" extraClassName="polaroid-left" />
				</div>
				<div className="col-md-4">
					<h3>Donate</h3>
					<p>
						If you would like to support us and make a contribution, we will be very
						happy and thankful. All donations are gratefully received and will make a big
						difference to our work.
						<br/>Thank you so much!
					</p>
				</div>
			</div>
		</div>

	</Layout>
)

export default ProjectsPage
