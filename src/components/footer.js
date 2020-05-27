import React from "react"
import styled from "styled-components"

const Address = styled.p`
	border-top: 1px solid #eee;
	padding: 25px;
	font-size: 15px;
	text-align: center;
`;

const WhiteSpaceNoWrap = styled.span`
	white-space: nowrap;
`;

const Footer = () => {
	return (
		<footer className="container container-footer">
			<Address>
				Child of Mercy Orphanage Centre Kenya /
				P.O. Box: 1251-80100, Mombasa /
				Phone +254 721788731 or +254 703137337 / <a href="mailto:childofmercycentre_2010@yahoo.com"><WhiteSpaceNoWrap>E-Mail</WhiteSpaceNoWrap></a>
			</Address>
		</footer>
	);
};

export default Footer;
