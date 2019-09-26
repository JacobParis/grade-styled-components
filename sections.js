import React from "react";
import styled from "styled-components";

import { H2 } from "./headings";
import Theme from "./theme";


const SectionContainer = styled.section`
    background: white;
    margin-top: 2rem;
    max-width: 1000px;
    @media screen and (min-width: 400px) {
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: ${Theme.Layout.Corners};
    }
    @media screen and (min-width: 1000px) {
        margin: 1rem auto;
    }
`;

const SectionHeader = styled.header`
    background: ${Theme.Shades.Lightest};
    padding: 1.5rem;
    border-radius: ${Theme.Layout.Corners} ${Theme.Layout.Corners} 0 0;
    border-bottom: 1px solid ${Theme.Shades.Lighter};
    & h2 {
        margin: 0;
        font-size: 1.3rem;
    }
`;

const SectionContent = styled.div`
    padding: 2rem;
    ${({flex}) => flex && `
        display: flex;
        justify-content: space-between;
    `}
`;

export const Footing = styled.footer`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
`;


export function Heading({children}) {

    return (
        <SectionHeader>
            <H2>{children}</H2>
        </SectionHeader>
    )
}

export function Section({children, flex, ...props}) {
    console.log(children);
    
    if (Array.isArray(children)) {
        const Header = children.find(child => child.type === Heading);
        const NonHeaderChildren = children.filter(child => child.type !== Heading);

        return (
            <SectionContainer>
                {Header}
                <SectionContent flex={flex}>
                    {NonHeaderChildren}
                </SectionContent>
            </SectionContainer>
        );
    } else {
        return (
            <SectionContainer>
                <SectionContent flex={flex}>
                    {children}
                </SectionContent>
            </SectionContainer>
        )
    }

    
}

