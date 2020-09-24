import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Polaroid from "../components/polaroid"

import {StaffGallery} from "../components/StaffGallery"

const MissionPage = () => (
	<Layout>
		<SEO title="Mission" />
		<div className="container page-header"><h2>Mission</h2></div>

		<div className="container">
			<div className="row sb65">
				<div className="col-md-5">
					<h3>Who we are</h3>
					<p>
						Child of Mercy Orphanage Centre is a nonprofit making religious institution
						with a mission to ensure a better life is provided to the needy and orphaned,
						the less fortunate and poor children from poverty stricken families through a
						provision of primary necessities to attain a nation where children become
						self-reliant future leaders we target children of ages 5 to 15 years both girls
						and boys.
					</p>
				</div>
				<div className="col-md-4">
					<blockquote className="st-small">
						<p>
							<span className="first-letter">I</span>
							worked in another orphanage before, but due to some difficult circumstances I
							was not able to presume my visions. In 2010, when Child of Mercy was formed, I
							finally had the possibility to give the children a lovely home. That was the
							brightest moment in my life.
						</p>
						<small>Jessy, Director of COMOC</small>
					</blockquote>
				</div>
				<div className="col-md-3">
					<Polaroid alt="Jessy, Director of COMOC" filename="staff/jessica.jpg" />
				</div>
			</div>

			<div className="row sb65">
				<div className="col-md-6">
					<Polaroid alt="COMOC Staff" filename="comoc-staff.jpg" extraClassName="polaroid-left" />
				</div>
				<div className="col-md-6">
					<h3>Our goals</h3>
					<p>
						Our specified goal is to address their needs and formulate ways of attending
						to them by acquiring assistance in the form of donation gifts and money from
						charitable donor communities, charitable organizations both international and
						local, well-wishers, volunteers, local communities and government.
					</p>
					<blockquote className="st-mini">
						<p>
							<span className="first-letter">M</span>y biggest aim is to see that the children are
							well protected and cared for but also to widen up the centre or even go to
							different parts of the country, because there are so many children who urgently
							need our assistance.
						</p>
						<small>Jessy, Director of COMOC</small>
					</blockquote>
				</div>
			</div>

			<div className="row sb65">
				<div className="col-md-6">
					<h3>Our main objectives</h3>
					<p>The institution shall have the following specific principal objectives:</p>
					<ul className="list">
						<li>Food provision</li>
						<li>Establish and broaden-up structural building the children shall be catered for</li>
						<li>Clothing</li>
						<li>Medication</li>
						<li>Love and counseling through disciplined staffs of good reputation</li>
						<li>Acquire land through lease for subsistence farming to cater for the children
							and training in agricultural skills and for structural developments</li>
					</ul>
				</div>
				<div className="col-md-6">
					<Polaroid alt="Samuel and Kay" filename="samuel-and-kay.jpg" />
				</div>
			</div>

			<div className="row sb65">
				<div className="col-md-12">
					<h3>Our Staff</h3>

					<StaffGallery />
				</div>
			</div>

		</div>


	</Layout>
)

export default MissionPage
