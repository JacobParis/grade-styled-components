import React from "react";
import styled from "styled-components";

import Theme from "./theme";

export const H1 = styled.h2`
    color: ${Theme.Shades.Darker};
    font-size: 2.5rem;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
`;

export const H2 = styled.h2`
    color: ${Theme.Shades.Darker};
    font-size: 2rem;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
`;

export const H3 = styled.h3`
    color: ${Theme.Shades.Darker};
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
`;

export const H4 = styled.h4`
    color: ${Theme.Shades.Darker};
    font-size: 1.3rem;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
`;

export const P = styled.p`
    color: ${Theme.Shades.Dark};
    font-size: 1rem;
    margin: 1.5rem 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.75rem;
`;
