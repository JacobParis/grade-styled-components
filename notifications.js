import React from "react";
import styled from "styled-components";

import Theme from "./theme";

const BaseNotification = styled.div`
    font-family: Roboto, sans-serif;
    border: 1px solid;
    border-radius: ${Theme.Layout.Corners};
    font-size: 1rem;
    padding: 1.25rem;
    margin: 1rem 0;
`;

export const SuccessNotification = styled(BaseNotification)`
    background-color: ${Theme.Colors.Green}33;
    color: ${Theme.Colors.Green};
`;

export const ErrorNotification = styled(BaseNotification)`
    background-color: ${Theme.Colors.Red}33;
    color: ${Theme.Colors.Red};
`;

export const WarningNotification = styled(BaseNotification)`
    background-color: ${Theme.Colors.Orange}33;
    color: ${Theme.Colors.Orange};
`;

export const InfoNotification = styled(BaseNotification)`
    background-color: ${Theme.Colors.Blue}33;
    color: ${Theme.Colors.Blue};
`;
