import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Source: https://criscodes.hashnode.dev/how-to-render-multiple-images-in-gatsby-using-image-component-cjxoowlou000pfms1o91x71ts

// Note: You can change "images" to whatever you'd like.

const Polaroid = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} className={`featurette-image img-responsive polaroid sl-normal ${props.extraClassName}`} />;
    }}
  />
);

export default Polaroid;
