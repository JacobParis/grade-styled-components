import React from "react";
import styled from "styled-components";

import Theme from "../theme";

export const ListItem = styled.li`
    color: ${Theme.Shades.Dark};
    font-family: 'Roboto', sans-serif;
    line-height: 2rem;
`;

export const BulletList = styled.ul`
    list-style: none;
    padding-inline-start: 1.5rem;
    li::before {
        content: "\\2022";
        color: ${getColorFromProps};
        display: inline-block;
        width: 1rem;
        margin-inline-start: -1rem;
        font-size: 1.75rem;
        vertical-align: middle;
    }
`;

export const NumberList = styled.ol`
    list-style: none;
    padding-inline-start: 1.5rem;
    counter-reset: li;
    li::before {
        counter-increment: li;
        content: counters(li,".") ".";
        color: ${getColorFromProps};
        font-weight: bold;
        display: inline-block;
        width: 1rem;
        margin-inline-start: -1rem;
    }
`;



function getColorFromProps(props) {
    if ("red" in props) return Theme.Colors.Red;
    if ("orange" in props) return Theme.Colors.Orange;
    if ("olive" in props) return Theme.Colors.Olive;
    if ("green" in props) return Theme.Colors.Green;
    if ("blue" in props) return Theme.Colors.Blue;
    if ("purple" in props) return Theme.Colors.Purple;
    if ("black" in props) return Theme.Shades.Darkest;

    return Theme.Colors.Dark;
}