import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import media from "./utils/breakpoints"

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
`;

const Item = styled.div`
	flex: 0 1 47%;
	background-color: #fff;
	margin: 0 1.5% 40px 1.5%;
	max-width: 280px;
	padding: 10px 10px 5px;
	box-shadow: 0 4px 6px rgba(0,0,0,.2);

	${media.sm`
		flex: 0 1 30%;
	`}

	${media.sl`
		flex: 0 0 22%;
	`}
`;

const Name = styled.p`
	margin-top: 10px;
	text-align: center;
`;

const Info = styled.span`
	display: block;
	color: #aaa;
`;



// Source: https://valtism.com/src/gatsby-multiple-images-json.html

export const KidsGallery = () => {
	const data = useStaticQuery(graphql`
		query {
			allKidsJson {
				nodes {
					name
					date
					src {
						childImageSharp {
							fluid(maxWidth: 300) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	return (
		<Container>
			{data.allKidsJson.nodes.map((item, i) => (
			<Item key={i}>
				<Img fluid={item.src.childImageSharp.fluid} alt={item.name} />
				<Name>{item.name} <Info>(* {item.date})</Info></Name>
			</Item>
			))}
		</Container>
	)
}
