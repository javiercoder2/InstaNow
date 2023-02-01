import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav `
    background: ${({scrollNav}) => (scrollNav ? '#000': '#000')};
    height: 80px;
    display:flex;
    margin-top:-80;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top:0;
   z-indez:10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 90px;
    z-index: 1;
    width: 100%;
    padding:0 75px;
    
    max-width: 1200px;
`;
export const NavLogo = styled(LinkR)`
    color: #fff;
    cursor:  pointer;
    font-size:1.5rem;
    display:flex;
    align-items: center;
    margin-left:-52px;
    font-weight:bold;
    text-decoration:none;
    float:right;
    border-radius: 120px;

    max-width: 100%;
    max-height: 100%;

`
;
export const MobileIcon = styled.div`
    display:none;
/* solo se desea que se reproduzca en la de abajo
 */    
    @media screen and (max-width: 768px) {
    display:block;
    position: absolute;
    top: 0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;

`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1 rem;
height: 100%;
cursor: pointer;


&.active {
    border-bottom:3px solid #F5B146;
}

/* yactiuve en vez de active en el navlink 
 */

`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
       display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #F5B146;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;


