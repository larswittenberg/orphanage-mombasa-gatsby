/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
	graphql`
	  query {
		site {
		  siteMetadata {
			title
			description
			url
			image
			author
			georegion
			geoplacename
			geoposition
		  }
		}
	  }
	`
  )

  const metaDescription = description || site.siteMetadata.description

  return (
	<Helmet
	  htmlAttributes={{
		lang,
	  }}
	  title={title}
	  titleTemplate={`%s | ${site.siteMetadata.title}`}
	  meta={[
		{
		  name: `description`,
		  content: metaDescription,
		},
		{
		  property: `og:title`,
		  content: title,
		},
		{
		  property: `og:description`,
		  content: metaDescription,
		},
		{
		  property: `og:type`,
		  content: `website`,
		},
		{
			name: `og:image`,
			content: `${site.siteMetadata.url}${site.siteMetadata.image}`,
		},
		{
		  name: `twitter:card`,
		  content: `summary`,
		},
		{
		  name: `twitter:creator`,
		  content: site.siteMetadata.author,
		},
		{
		  name: `twitter:title`,
		  content: title,
		},
		{
		  name: `twitter:description`,
		  content: metaDescription,
		},
		{
			name: `geo.region`,
			content: site.siteMetadata.georegion,
		},
		{
			name: `geo.placename`,
			content: site.siteMetadata.geoplacename,
		},
		{
			name: `geo.position`,
			content: site.siteMetadata.geoposition,
		},
	  ].concat(meta)}
	/>
  )
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO