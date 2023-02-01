import React from "react";
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll' 
import {
  FooterWrap,
  FooterLinksContainer,
  FooterContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";

const toggleHome = () => {
  scroll.scrollTop();
}


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Carrers</FooterLink>
              <FooterLink to="/signin">Partnership</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/signin">How to Use it</FooterLink>
            <FooterLink to="/signin">Influencer</FooterLink>
            <FooterLink to="/signin">Ambassadors</FooterLink>
            <FooterLink to="/signin">People's reactions</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle>Contact</FooterLinkTitle>
            <FooterLink to="/signin">Support</FooterLink>
            <FooterLink to="/signin">Work with Us</FooterLink>
            <FooterLink to="/signin">Claims</FooterLink>
            <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems> 
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            InstaNow
            </SocialLogo>
            <WebsiteRights>  InstaNow © {new Date().getFullYear()} All rights reserved </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target ="_blank" aria-label="Facebook"><FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href="/" target ="_blank" aria-label="Youtube"><FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href="/" target ="_blank" aria-label="Instagram"><FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href="//.twitter.com/" target ="_blank" aria-label="Twitter"><FaTwitter/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
