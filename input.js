import React from "react";
import styled from "styled-components";

import Theme from "./theme";

export const InputBase = styled.input.attrs({
    type: "text"
})`
    font-family: Roboto, sans-serif;
    font-weight: 300;
    color: ${({disabled}) => disabled 
        ? Theme.Shades.Lighter
        : Theme.Shades.Dark
    };
    font-size: 1rem;
    padding: 0.8rem 1rem;
    min-width: 16rem;
    border-radius: ${Theme.Layout.Corners};
    border: 1px solid ${({disabled, borderColor}) => disabled
        ? Theme.Shades.Lightest
        : borderColor
    };
    background: ${({disabled}) => disabled 
        ? Theme.Shades.White
        : Theme.Shades.Lightest
    };
    outline: none;
    transition: all 0.3s ease-out;
    &::placeholder {
        user-select: none;
        color: ${({disabled}) => disabled
            ? Theme.Shades.Lighter
            : Theme.Shades.Medium
        };
    }
    &:hover:not(:focus) {
        border: 1px solid ${({disabled}) => disabled
            ? Theme.Shades.Lightest
            : Theme.Shades.Medium
        };
    }
    &:focus {
        background: white;
        border: 1px solid ${Theme.Colors.Blue};
    }
`;

const Label = styled.span`
    position: absolute;
    color: ${Theme.Shades.Medium};
    font-family: 'Roboto';
    font-weight: normal;
    transition: all 0.3s ease-out;
`;

const InputContainer = styled.label`
    position: relative;
    display: inline-block;
    margin: 2rem 1rem 1rem 1rem;
    ${({isRequired}) => isRequired && `&::after {
        content: '*';
        position: absolute;
        right: 0.25rem;
        top: 0.25rem;
        line-height: 1rem;
        font-size: 1.2rem;
        color: ${Theme.Shades.Medium};
    }`}
    ${InputBase}:placeholder-shown + ${Label} {
        left: 0;
        top: 0;
        padding: 0.8rem 1rem;
        font-size: 1rem;
        opacity: 0;
    }
    ${InputBase} + ${Label} {
        left: 0;
        top: -1.5rem;
        padding: 0;
        font-size: 0.87rem;
    }
`;


export function TextInput(props) {
    console.log(props);
    const borderColor = getDefaultBorderColorFromProps(props);

    const isRequired = "required" in props;
    console.log(isRequired);
    return (
        <InputContainer isRequired={isRequired}>
            <InputBase 
                borderColor={borderColor}
                placeholder={props.label}
                {...props} 
            />
            <Label>{props.label}</Label>
        </InputContainer>
    );
}

function getDefaultBorderColorFromProps(props) {
    if ("success" in props) return Theme.Colors.Green;
    if ("warning" in props) return Theme.Colors.Orange;
    if ("error" in props) return Theme.Colors.Red;

    return Theme.Shades.Lighter;
}
