import React from "react";
import styled from "styled-components";

import Theme from "./theme";

const ButtonBase = styled.button`
    text-transform: uppercase;
    border-radius: ${({isRound, borderRadius}) => isRound
        ? borderRadius
        : Theme.Layout.Corners
    };
    min-width: 10rem;
    padding: ${({height}) => height} 2rem;
    margin: 0.5rem 0.8rem;
    box-sizing: border-box;
    outline: none;
    font-size: ${({fontSize}) => fontSize};
    transition: all 0.3s ease-out;
    color: ${({color, isGhost, isDark}) => isGhost 
        ? color 
        : isDark
            ? Theme.Shades.Medium
            : Theme.Shades.White
    };
    background: ${({color, isGhost}) => isGhost ? "none" : color};
    border: 1px solid ${({color, isGhost, isDark}) => isGhost 
        ? color 
        : isDark
            ? Theme.Shades.Lighter
            : Theme.Shades.White
    };
    &:hover {
        background: ${({color, isDark}) => isDark 
            ? Theme.Shades.Medium
            : shadeColor(color, 15)
        };
        border: 1px solid ${({color, isDark}) => isDark 
            ? Theme.Shades.Medium
            : shadeColor(color, 15)
        };
        color: ${Theme.Shades.White};
    }
    &:active {
        background: ${({color, isDark}) => isDark 
            ? Theme.Shades.Dark
            : shadeColor(color, -15)
        };
        border: 1px solid ${({color, isDark}) => isDark 
            ? Theme.Shades.Dark
            : shadeColor(color, -15)
        };
        border-top: 1px solid ${({color, isDark}) => isDark 
            ? shadeColor(Theme.Shades.Dark, -35)
            : shadeColor(color, -35)
        };
        color: ${Theme.Shades.White};
    }
`;

export function Button(props) {
    const color = getColorFromProps(props);
    const height = getHeightFromProps(props);
    const fontSize = getFontSizeFromProps(props);
    const borderRadius = getBorderRadiusFromProps(props);

    const isDark = color === "white";

    return (
        <ButtonBase 
            color={color}
            height={height}
            fontSize={fontSize}
            borderRadius={borderRadius}
            isDark={isDark}
            isGhost={props.ghost}
            isRound={props.pill}
        >{props.children}</ButtonBase>
    );
}

function getBorderRadiusFromProps(props) {
    if ("micro" in props) return "1rem";
    if ("tiny" in props) return "1.17rem";
    if ("small" in props) return "1.3rem";
    if ("large" in props) return "1.87rem";
    if ("huge" in props) return "2.17rem";

    return "1.5rem";
}

function getHeightFromProps(props) {
    if ("micro" in props) return "0.5rem";
    if ("tiny" in props) return "0.6rem";
    if ("small" in props) return "0.7rem";
    if ("large" in props) return "1.1rem";
    if ("huge" in props) return "1.3rem";

    return "0.8rem";
}

function getFontSizeFromProps(props) {
    if ("micro" in props) return "0.73rem";
    if ("tiny" in props) return "0.8rem";
    if ("small" in props) return "0.93rem";
    if ("large" in props) return "1.2rem";
    if ("huge" in props) return "1.4rem";

    return "1rem";
}

function getColorFromProps(props) {
    if ("blue" in props) return Theme.Colors.Blue;
    if ("green" in props) return Theme.Colors.Green;
    if ("olive" in props) return Theme.Colors.Olive;
    if ("orange" in props) return Theme.Colors.Orange;
    if ("red" in props) return Theme.Colors.Red;
    if ("purple" in props) return Theme.Colors.Purple;

    return "white";
}

function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}