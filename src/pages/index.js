import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "../components/utils/breakpoints"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Polaroid from "../components/polaroid"

const Teaser = styled.h2`
	max-width: 90%;
	margin: 90px auto 40px auto;
	color: #fff;
	font-size: 30px;
	line-height: 1;
	text-align: center;
	font-weight: 200;
	z-index: 2;

	${media.sm`
		margin: 110px auto 60px auto;
		font-size: 38px;
	`}

	${media.sl`
		position: absolute;
		top: 90px;
		left: 0;
		right: 0;
		margin: 0;
		max-width: none;
	`}

	${media.md`
		font-size: 63px;
	`}

	span {
		display: inline-block;
		margin: 0;
		padding: 5px 12px;
		background-color: rgba(33,33,33,0.85);

		${media.md`
			margin-bottom: 20px;
		`}
	}
`;

const FullscreenImage = styled.div`
	${media.sl`
		margin-top: 50px;
	`}
`;

const HomeContentWrapper = styled.div`
	background-color: #fff;
	padding-top: 50px;
`;


const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "comoc.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1280) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<Layout extraClassName="home">
			<SEO title="Home" />

			<Teaser>
				<span>A wholehearted welcome to the</span>
				<span>Child of Mercy Orphanage Centre</span>
			</Teaser>

			<FullscreenImage>
				<Img
					fluid={data.file.childImageSharp.fluid}
					alt="Child of Mercy Orphanage Centre, Mombasa"
				/>
			</FullscreenImage>

			<HomeContentWrapper>
				<div className="container">
					<div className="row sb65">
						<div className="col-md-6">
							<p>
								<span className="first-letter">C</span>hild of Mercy Orphanage Centre (COMOC) was
								formed in 2010 and is situated within a half-acre walled plot close to Shelly
								Beach, and a five minute walk from the Likoni slum area south of Mombasa. It is
								home to 23 children – both boys and girls from ages 5-15 years. Before getting
								here the children had lives without any prospects: They are orphans without a
								family, neglected and abandoned children who lived on the street or from poor
								families who could not afford to take care of the children.</p>
						</div>
						<div className="col-md-6">
							<p>Jessy, the Director of the Orphanage Centre, as well as all the workers at
								COMOC, offer a home to the children where they can act like a child and also be
								prepared for their adult life. The children get all necessities like food,
								clothes, medicine, education, aspirations for life and most importantly love and
								support. Jessy indeed became a mom for 23 children.</p>
							<p>But to offer the children such a life, they are completely reliant on
								donations of well-wishing people.</p>
						</div>
					</div>

					<div className="row featurette">
						<div className="col-md-6">
							<blockquote>
								<h2 className="featurette-heading">The happiest moment for me is when I see the children.</h2>
								<p>
									<span className="first-letter">I</span>
									know that there is always a light, which will shine for us. It is my biggest aim
									to offer the children here a good life with everything that they need. The
									children and I are so grateful for every kind of help.</p>
								<small>Jessy, Director of COMOC</small>
							</blockquote>

							<h3 className="st-100">News from Kenya</h3>
							<p>
								<a href={`Aid4orphans_Newsletter_july_18.pdf`} download>Download Aid4orphans Newsletter July 2018 [PDF, 870KB]</a>
							</p>
						</div>
						<div className="col-md-6">
							<Polaroid alt="Jessy and 2 Children" filename="jessy-and-kids.jpg"/>
						</div>
					</div>
				</div>

			</HomeContentWrapper>

		</Layout>
	)
}

export default IndexPage
