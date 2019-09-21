import React from "react";
import styled from "styled-components";

import Theme from "../theme";

import { H1 } from "../headings";

const BaseBar = styled.div`
    display: flex;
    height: 4rem;
    box-sizing: border-box;
    @media screen and (min-width: 600px) and (max-width: 999px) {
        height: 5rem;
    }
    @media screen and (min-width: 1000px) {
        height: 6.5rem;
    }
`;

export const Bar = styled(BaseBar)`
    background: white;
`;

export const TransparentBar = styled(BaseBar)`
    color: white;
`;

const BaseTitle = styled(H1)`
    margin: 0 1rem;
    line-height: 4rem;
    font-size: 1.3rem;
    
    @media screen and (max-width: 599px) {
        display: none;
    }
    @media screen and (min-width: 600px) and (max-width: 999px) {
        line-height: 5rem;
    }
    @media screen and (min-width: 1000px) {
        line-height: 6.5rem;
    }
`;

export const DarkTitle = styled(BaseTitle)`
    color: ${Theme.Shades.Darker};
`;

export const Title = styled(BaseTitle)`
    color: white;
`;

const BaseNav = styled.ul`
    display: flex;
    flex: 1 0 auto;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const HorizontalNav = styled(BaseNav)`
    @media screen and (min-width: 1000px) {
        border-left: 1px solid ${Theme.Shades.Lighter};
    }
`;

export const TransparentNav = styled(BaseNav)`

`;
const BaseNavItem = styled.li`
    line-height: 4rem;
    padding: 0;
    text-align: center;
    flex: 1 1 auto;
    position: relative;
    @media screen and (min-width: 600px) and (max-width: 999px) {
        line-height: 5rem;
    }
    @media screen and (min-width: 1000px) {
        line-height: 6.5rem;
    }
    > a {
        text-decoration: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        color: inherit;
    }
`;

export const NavItem = styled(BaseNavItem)`
    color: ${({active}) => active ? Theme.Colors.Blue : Theme.Shades.Dark};
    border-bottom: 2px solid ${({active}) => active ? Theme.Colors.Blue : "none"};
    &:hover {
        border-bottom: 2px solid ${({active}) => active ? Theme.Colors.Blue : `${Theme.Colors.Blue}33`};
    }
    @media screen and (min-width: 1000px) {
        background: ${({active}) => active ? Theme.Shades.Lightest : "none"};
        border-right: 1px solid ${Theme.Shades.Lighter};
    }
`;

export const TransparentNavItem = styled(BaseNavItem)`
    color: white;
`;