import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#C19A6B' : 'transparent')};
    max-height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.4s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: bold;

    @media screen and (max-width: 1100px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
    }
    
    @media screen and (max-width: 760px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none; 
    text-align:  center;
    margin-right: -10rem;
    padding-left: 30px;
    padding-right: 30px;
    /* margin-right: 100px; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.div`
    height : 75px;
    padding-left: -8px;
    padding-right: -8px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0;
    height: 100%;
    cursor: pointer;
    margin: 5px 20px;
    /* margin-right: 10px;
    margin-left: 30px; */

    &.active {
        border-bottom: 3px solid #786D5F;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavBTnLink = styled.div`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding : 10px 22px;
    border-radius: 5px;
    margin : 10px 60px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #786D5F;
    }
`;