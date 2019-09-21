import React from "react";
import styled from "styled-components";

import Theme from "../theme";

export const MainContainer = styled.div`
    margin-left: 20rem;
    margin-right: 1rem;
    padding-top: 4rem;
    margin-bottom:
`;

export const BaseSidebar = styled.div`
    float: left;
    position: sticky;
    left: 1rem;
    top: 1rem;
    width: 18rem;
    border-radius: ${Theme.Layout.Corners};
    background: white;
`;

export const SidebarHero = styled.div`
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 1rem;
`;

export const ListSeparator = styled.li`
    height: 2rem;
    border-top: 1px solid ${Theme.Shades.Lighter};
    border-bottom: 1px solid ${Theme.Shades.Lighter};
    background-color: ${Theme.Shades.Lightest};
    color: ${Theme.Shades.Dark};
    font-size: 0.8rem;
    text-transform: uppercase;
    padding-left: 2rem;
    line-height: 2rem;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
    font-family: Roboto, sans-serif;
    height: 3rem;
    line-height: 3rem;
    background-image: linear-gradient(to right, ${getColorFromProps}, ${getSecondColorFromProps});
    color: ${({active}) => active 
        ? "#ffffff"
        : Theme.Shades.Dark
    };
    padding-left: 2rem;
    position: relative;
    transition: all 0.3s ease;
    &:hover {
        > a::before {
            opacity: 0.8;
        }
    }
     ${({active}) => active && `
        > a::before {
            opacity: 0 !important;
        }
    `};
    > a {
        text-decoration: none;
        position: absolute;
            left: 2rem;
            right: 0;
            top: 0;
            bottom: 0;
        color: inherit;
        font-size: 1rem;
        line-height: 3rem;
        transition:  transform 1s;
        z-index: 0;
        &::before {
            content: '';
            position: absolute;
            left: -2rem;
            right: 0;
            top: 0;
            bottom: 0;
            background: white;
            border: 1px solid white;
            transition: all 0.3s ease;
            opacity: 1;
            z-index: -1;
        }
    }
`;

function getColorFromProps(props) {
    if ("red" in props) return Theme.Colors.Red;
    if ("orange" in props) return Theme.Colors.Orange;
    if ("olive" in props) return Theme.Colors.Olive;
    if ("green" in props) return Theme.Colors.Green;
    if ("blue" in props) return Theme.Colors.Blue;
    if ("purple" in props) return Theme.Colors.Purple;

    return "#ffffff";
}

function getSecondColorFromProps(props) {
    if ("to-red" in props) return Theme.Colors.Red;
    if ("to-orange" in props) return Theme.Colors.Orange;
    if ("to-olive" in props) return Theme.Colors.Olive;
    if ("to-green" in props) return Theme.Colors.Green;
    if ("to-blue" in props) return Theme.Colors.Blue;
    if ("to-purple" in props) return Theme.Colors.Purple;

    return "#ffffff";
}