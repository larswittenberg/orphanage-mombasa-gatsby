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
	flex: 0 1 44%;
	background-color: #fff;
	margin: 0 2% 40px 2%;
	max-width: 280px;
	padding: 10px 10px 5px;
	box-shadow: 0 4px 6px rgba(0,0,0,.2);

	${media.sm`
		flex: 0 1 29%;
	`}

	${media.sl`
		flex: 0 0 23%;
		margin: 0 2% 40px 0;
	`}

	${media.md`
		flex: 0 0 18%;
		margin: 0 2% 40px 0;
	`}
`;

const Name = styled.p`
	margin-top: 10px;
	text-align: center;
`;


// Source: https://valtism.com/src/gatsby-multiple-images-json.html

export const StaffGallery = () => {
	const data = useStaticQuery(graphql`
		query {
			allStaffJson {
				nodes {
					name
					title
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
			{data.allStaffJson.nodes.map((item, i) => (
			<Item key={i}>
				<Img fluid={item.src.childImageSharp.fluid} alt={item.name} />
				<Name>{item.name}<br />{item.title}</Name>
			</Item>
			))}
		</Container>
	)
}
