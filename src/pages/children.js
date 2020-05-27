import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {KidsGallery} from "../components/KidsGallery"

const ChildrenPage = () => (
	<Layout>
		<SEO title="Children" />
		<div className="container page-header"><h2>Children</h2></div>

		<div className="container">
			<div className="row sb65">
				<div className="col-md-6">
					<p>Child of Mercy Orphanage Centre is home to 23 children both boys and girls aged between 5 to 15 years. We try to offer a better life to orphans as well as neglected and abandoned children from poverty stricken families.</p>
					<p>Aside from taking care of the children and providing them basic needs it is our greatest concern that they can go to school to become well educated.</p>
				</div>
				<div className="col-md-6">
					<p>Right now (2013) four of the children attend Nursery School, 17 Primary School and one girl the Secondary School. Furthermore there is one girl who goes to a Boarding School.</p>
					<p>Kenya provides no school fees free of charge, so every child has to be sponsored by well-wishing people. </p>
					<p>If you are interested to get detailed information about the children, please have a look below.</p>
				</div>
			</div>

			<KidsGallery />
		</div>


	</Layout>
)

export default ChildrenPage
