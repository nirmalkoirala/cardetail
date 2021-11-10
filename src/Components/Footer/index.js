import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'

import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons
} from './FooterElements'


const Footer = ({isOpen, toggle}) => {
    // const [scrollNav, setScrollNav] = useState(false);

    // const changeNav = () => {
    //     if(window.scrollY >=80) {
    //         setScrollNav(true);
    //     } else{
    //         setScrollNav(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    // }, [])

const toggleHome = () => {
    scroll.scrollToTop();
};
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems isOpem={isOpen} onClick={toggle}>
                            <FooterLinkTitle>Speak To Our Team</FooterLinkTitle>
                                <FooterLink to='services'>0456 789 1234</FooterLink>
                                <FooterLink to='aboutus' >admin@elshaddaihc.com</FooterLink> 
                            </FooterLinkItems>
                            <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                            
                                <FooterLink to="/signin">http://www.elshaddaihc.com</FooterLink>
                                <FooterLink to="/signin">Parkes Street, Belconnen, ACT 2611</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>ElShaddai</SocialLogo>
                        <WebsiteRights>ElShhadai © {new Date().getFullYear()}
                         All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/Elshaddaihc/" target="_blank"
                             aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/" target="_blank"
                             aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/" target="_blank"
                             aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        </>
    );
};



export default Footer;
