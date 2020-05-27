import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"


const PhotosPage = ({ data }) => {
	const fullSize = data.images.edges.map((edge) => edge.node.full.fluid.src)
	const thumbs = data.images.edges.map((edge) => edge.node.thumb.fluid)

	return (
		<Layout>
			<SEO title="Photos" />
			<div className="container page-header"><h2>Children</h2></div>

			<div className="container">
				{/* https://github.com/browniebroke/gatsby-image-gallery */}
				<Gallery images={fullSize} thumbs={thumbs} />
			</div>
		</Layout>
	)
}

export default PhotosPage


export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "photogallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          thumb: childImageSharp {
            fluid(maxWidth: 120, maxHeight: 80) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(
              maxWidth: 800
              quality: 85
              srcSetBreakpoints: [768, 1024]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
