import React, { Component } from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink } from './FooterElements'
export class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>                      <FooterLink to="/signin">About us</FooterLink>
                   </FooterLinkTitle>

                    <FooterLink to="/signin">Comment ça fonctionne</FooterLink>
                    <FooterLink to="/signin">Témoignages</FooterLink>
                    <FooterLink to="/signin">Histoire</FooterLink>
                    <FooterLink to="/signin">Partenaires</FooterLink>
                    <FooterLink to="/signin">Termes et Conditions</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>                      <FooterLink to="/signin">Social Media </FooterLink>
                   </FooterLinkTitle>

                    <FooterLink to="/signin">Comment ça fonctionne</FooterLink>
                    <FooterLink to="/signin">Témoignages</FooterLink>
                    <FooterLink to="/signin">Histoire</FooterLink>
                    <FooterLink to="/signin">Partenaires</FooterLink>
                    <FooterLink to="/signin">Termes et Conditions</FooterLink>
                </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>                      <FooterLink to="/signin">Videos</FooterLink>
                   </FooterLinkTitle>

                    <FooterLink to="/signin">Comment ça fonctionne</FooterLink>
                    <FooterLink to="/signin">Témoignages</FooterLink>
                    <FooterLink to="/signin">Histoire</FooterLink>
                    <FooterLink to="/signin">Partenaires</FooterLink>
                    <FooterLink to="/signin">Termes et Conditions</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>                      <FooterLink to="/signin">contactez nous</FooterLink>
                   </FooterLinkTitle>
                    <FooterLink to="/signin">Comment ça fonctionne</FooterLink>
                    <FooterLink to="/signin">Témoignages</FooterLink>
                    <FooterLink to="/signin">Histoire</FooterLink>
                    <FooterLink to="/signin">Partenaires</FooterLink>
                    <FooterLink to="/signin">Assala {new Date().getFullYear()} All Rights Reserved.</FooterLink>
                </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    )
  }
}

export default Footer