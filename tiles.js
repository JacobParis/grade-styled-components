import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Theme from "./theme";

export const Tiles = styled.div`
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    grid-auto-rows: 14rem;
    grid-gap: 2rem;
    width: 100%;
    margin: 0 1rem;
    @media screen and (min-width: 1000px) {
        max-width: 1000px;
        margin: 0 auto;
    }
`;

export const TinyTile = createTileBySize(1, 1);
export const TallTile = createTileBySize(1, 3);
export const WideTile = createTileBySize(4, 1);
export const MediumTile = createTileBySize(2, 2);

export const BaseTileImage = styled.div`
    position: relative;
    background-image: ${getImageFromProps};
    background-color: ${getColorFromProps};
    background-size: 120%;    
    background-position: top center;
    background-repeat: no-repeat;
    transition: background-size 1s ease-in-out;
    z-index: 0;
    width: 100%;
    height: 100%;
    grid-column: auto / span ${({columns}) => columns};
    grid-row: auto / span ${({rows}) => rows};
    border-radius: ${getCornersFromProps};
    &:hover {
        background-size: 100%;
        &::before {
            opacity: 0.8;
        }
        & span {
            transform: translateY(-5%) scale(1.1);
        }
    }
    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: ${getGradientFromProps};
        background-color: ${getColorFromProps};
        border-radius: ${Theme.Layout.Corners};
        opacity: 0.6;
        z-index: -1;
        transition: opacity 1s;
    }
`;

const TileImageText = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    color: ${getTextColorFromProps};
    font-size: 3rem;
    transition:  transform 1s;
`;

const BaseTile = styled.div`
    display: grid;
    grid-template-columns: minmax(12rem, 1fr) ${({columns}) => columns > 1 && "auto"};
    grid-template-rows: minmax(12rem, 1fr) ${({rows}) => rows > 1 && "auto"}; 
    grid-column: auto / span ${({columns}) => columns};
    grid-row: auto / span ${({rows}) => rows};
    background: white;
    border-radius: ${Theme.Layout.Corners};
    position: relative;
`;

const TileContent = styled.div`
    padding: 2rem;
    min-width: 0;
    min-height: 0;
    grid-column: auto / span 1;
    grid-row: auto / span 1;
`;

function TileImage({children, ...props}) {
    const LinkWrapper = ({children}) => {
        if ("link-out" in props) {
            return <a href={props["link-out"]}>{children}</a>;
        }

        if ("link" in props) {
            return <Link to={props.link}>{children}</Link>
        }

        return null;
    }

    const Text = () => {
        if ("imageText" in props) {
            return <TileImageText {...props}>{props.imageText}</TileImageText>;
        }

        return null;
    }
    
    return (
        <BaseTileImage {...props}>
            <LinkWrapper>
                <Text />
            </LinkWrapper>
        </BaseTileImage>
    )
}

function createTileBySize(columns, rows) {
    return (props) => {
        const Content = () => {
            if ("children" in props) {
                return <TileContent rows={rows} columns={columns}>{props.children}</TileContent>;
            }

            return null;
        }

        return (
            <BaseTile rows={rows} columns={columns} {...props}>
                <TileImage
                    {...props}
                    rows={"tall" in props ? rows : 1}
                    columns={"wide" in props ? columns : 1}
                    tall={props.tall || columns > rows}
                    wide={props.wide || rows > columns}
                />
                <Content 
                    rows={"tall" in props ? rows : 1}
                    columns={"wide" in props ? columns : 1}
                />
            </BaseTile>
        );
    }
}

function getImageFromProps(props) {
    if ("image" in props) return `url(${props.image});`;

    return "none";
}

function getCornersFromProps(props) {
    if (props.tall) return (
        `${Theme.Layout.Corners} 0 0 ${Theme.Layout.Corners}`
    );

    if (props.wide) return (
        `${Theme.Layout.Corners} ${Theme.Layout.Corners} 0 0`
    );

    return `${Theme.Layout.Corners}`;
}
function getColorFromProps(props) {
    if ("red" in props) return Theme.Colors.Red;
    if ("orange" in props) return Theme.Colors.Orange;
    if ("olive" in props) return Theme.Colors.Olive;
    if ("green" in props) return Theme.Colors.Green;
    if ("blue" in props) return Theme.Colors.Blue;
    if ("purple" in props) return Theme.Colors.Purple;
    if ("black" in props) return Theme.Shades.Darkest;

    return "#ffffff";
}

function getGradientFromProps(props) {
    if ("to-red" in props) return `linear-gradient(to right, transparent, ${Theme.Colors.Red})`;
    if ("to-orange" in props) return `linear-gradient(to right, transparent, ${Theme.Colors.Orange})`;
    if ("to-olive" in props) return `linear-gradient(to right, transparent, ${Theme.Colors.Olive})`;
    if ("to-green" in props) return `linear-gradient(to right, transparent, ${Theme.Colors.Green})`;
    if ("to-blue" in props) return `linear-gradient(to right, transparent, ${Theme.Colors.Blue})`;
    if ("to-purple" in props) return `linear-gradient(to right, transparent, ${Theme.Colors.Purple})`;
    if ("to-black" in props) return `linear-gradient(to right, transparent, ${Theme.Shades.Darkest})`;
    if ("to-white" in props) return `linear-gradient(to right, transparent, ${Theme.Shades.White})`;

    return "none";
}

function getTextColorFromProps(props) {
    if ("image" in props) return Theme.Shades.White;
    if ("red" in props) return Theme.Shades.White;
    if ("orange" in props) return Theme.Shades.White;
    if ("olive" in props) return Theme.Shades.White;
    if ("green" in props) return Theme.Shades.White;
    if ("blue" in props) return Theme.Shades.White;
    if ("purple" in props) return Theme.Shades.White;
    if ("black" in props) return Theme.Shades.White;

    return Theme.Shades.Dark;
}
