import React from "react";
import styled from "styled-components";

import Theme from "./theme";

const CheckboxContainer = styled.label`
    display: block;
    margin: 1rem 0;    
`;

const CheckboxInput = styled.input.attrs({
    type: "checkbox"
})`
    position: absolute;
    opacity: 0;
    &:focus + ${CheckboxLabel} {
        &:before {
            border-color: ${Theme.Colors.Blue};
        }
    }
    &:checked + ${CheckboxLabel}:after {
        transform: scale(1);
        border-radius: ${Theme.Layout.Corners};
    }
`;

const RadioInput = styled.input.attrs({
    type: "radio"
})`
    position: absolute;
    opacity: 0;
    &:focus + ${RadioLabel} {
        &:before {
            border-color: ${Theme.Colors.Blue};
        }
    }
    &:checked + ${RadioLabel}:after {
        transform: scale(1);
        border-radius: 50%;
    }
`;

const Label = styled.span`
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: ${Theme.Shades.Dark};
    padding-inline-start: 2rem;
    position: relative;
    user-select: none;
    &:before {
        position: absolute;
        left: 0;
        content: '';
        width: 1.7rem;
        height: 1.7rem;
        background: ${Theme.Shades.Lightest};
        border: 1px solid ${Theme.Shades.Lighter};
        box-sizing: border-box;
    }
    &:after {
        position: absolute;
        left: 0;
        width: 1.7rem;
        height: 1.7rem;
        color: ${Theme.Shades.Darkest};
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        transform: scale(0);
        transition: all 0.1s ease-out;
    }
`;

const CheckboxLabel = styled(Label)`
    &:before {
        border-radius: ${Theme.Layout.Corners};
    }
    &:after {
        content: '✔';
        font-size: 0.7rem;
    }
`;

const RadioLabel = styled(Label)`
    &:before {
        border-radius: 50%;
    }
    &:after {
        content: '•';
        font-size: 2rem;
    }
`;

const RadioContainer = styled.div.attrs({
    role: "radiogroup"
})`
    position: relative;
    :after {
        position: absolute;
        content: '';
        border: 1px solid ${Theme.Colors.Blue};
        left: -1px;
        top: -0.3rem;
        bottom: -0.3rem;
        width: 1.7rem;
        border-radius: 0.85rem;
        opacity: 0;
        transition: all 0.3s ease-out;
    }
    &:focus-within:after {
        opacity: 1;
    }
`;
export function Checkbox({children, checked, ...props}) {
    const [isChecked, setChecked] = React.useState(checked);
    const toggleBox = e => setChecked(e.target.checked);
    return (
        <CheckboxContainer>
            <CheckboxInput checked={isChecked} onChange={toggleBox} {...props} />
            <CheckboxLabel>{children}</CheckboxLabel>
        </CheckboxContainer>
    );
}

export function RadioGroup({label, children}) {
    const namedChildren = children.map(child => {
        return child.type === RadioButton ? (
            <RadioButton name={label} {...child.props} />
        ) : child;
    });

    return (
        <RadioContainer>
            {namedChildren}
        </RadioContainer>
    )
}
export function RadioButton({children, checked, ...props}) {

    return (
        <CheckboxContainer>
            <RadioInput {...props} />
            <RadioLabel>{children}</RadioLabel>
        </CheckboxContainer>
    );
}