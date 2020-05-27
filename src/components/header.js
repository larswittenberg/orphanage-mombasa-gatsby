import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import media from "../components/utils/breakpoints"


const HeaderRow = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	min-height: 50px;
	background-color: rgba(33,33,33,0.99);
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`;

const HeaderRowInner = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	${media.sm`
		max-width: 750px;
	`}

	${media.md`
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 970px;
	`}

	${media.lg`
		max-width: 1170px;
	`}
`;

const BrandName = styled.h1`
	height: 50px;
	max-width: 85%;
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	a {
		color: #fff;
		font-size: 18px;
		line-height: 20px;
		padding: 15px 0;
	}
`;


const HamburgerIconLabel = styled.label`
	position: absolute;
	top: 10px;
	right: 20px;
	display: block;
	width: 34px;
	height: 30px;
	margin: 0;
	z-index: 200;

	${media.md`
		display: none;
	`}

	&:focus {
		outline: none;
	}

	&:hover {
		cursor: pointer;
	}
`;

const HamburgerIconIcon = styled.span`
	&,
	&::before,
	&::after {
		display: block;
		position: absolute;
		width: 24px;
		height: 3px;
		content: '';
		cursor: pointer;
		background-color: #fff;
	}

	top: 5px;
	left: 5px;
	background: #fff;

	&::before {
		top: 8px;
	}

	&::after {
		top: 16px;
	}

`;

const HamburgerIconInput = styled.input`
	display: none;

	&:checked + .menu {
		display: block;
		margin: 0;
		padding: 0;

		${media.sm`
			display: flex;
			margin-left: -13px;
		`}
	}
`;


const NaviList = styled.ul`
	margin: 0;
	padding: 0;
	display: none;

	${media.md`
		display: flex;
	`}
`;

const NaviListItem = styled.li`
	list-style-type: none;
	margin: 0 0 10px 0;
	padding: 0;
	text-align: center;

	${media.md`
		margin-bottom: 0;
	`}
`;

const StyledLink = styled(Link)`
	display: inline-block;
	color: #fff;
	text-transform: uppercase;
	font-size: 14px;
	line-height: 1.7;
	letter-spacing: 0.06em;
	margin: 0 6px;
	padding: 7px 3px 0;
	border-bottom: 3px solid transparent;

	&.active,
	&:focus,
	&:hover {
		color: #fff;
		text-decoration: none;
		border-bottom-color: ${props => props.bordercolor};
	}
`;



const Header = ({ siteTitle }) => (
	<HeaderRow>
		<HeaderRowInner>
			<BrandName>
				<Link to="/">{siteTitle}</Link>
			</BrandName>

			<HamburgerIconLabel htmlFor="hamburgericon__input">
				<HamburgerIconIcon />
				<span className="sr-only">Menü anzeigen</span>
			</HamburgerIconLabel>
			<HamburgerIconInput type="checkbox" id="hamburgericon__input" />

			<NaviList role="navigation" className="menu">
				<NaviListItem className="navi-mission">
					<StyledLink to="/mission/" activeClassName="active" bordercolor="#fbf065">Mission</StyledLink>
				</NaviListItem>
				<NaviListItem className="navi-children">
					<StyledLink to="/children/" activeClassName="active" bordercolor="#8ccd88">Children</StyledLink>
				</NaviListItem>
				<NaviListItem className="navi-projects">
					<StyledLink to="/projects/" activeClassName="active" bordercolor="#50c2f2">Projects</StyledLink>
				</NaviListItem>
				<NaviListItem className="navi-volunteers">
					<StyledLink to="/volunteers/" activeClassName="active" bordercolor="#f64334">Volunteers</StyledLink>
				</NaviListItem>
				<NaviListItem className="navi-photos">
					<StyledLink to="/photos/" activeClassName="active" bordercolor="#fe733a">Photos</StyledLink>
				</NaviListItem>
				<NaviListItem className="navi-contact">
					<StyledLink to="/contact/" activeClassName="active" bordercolor="#feb8c0">Contact</StyledLink>
				</NaviListItem>
			</NaviList>
		</HeaderRowInner>
	</HeaderRow>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
