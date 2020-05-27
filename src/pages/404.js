import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div className="container page-header"><h2>404 - Page not found</h2></div>

		<div className="container">
			<div className="row sb65">
				<div className="col-md-5">
					<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
				</div>
			</div>
		</div>
	</Layout>
)

export default NotFoundPage
