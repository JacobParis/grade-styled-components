import React from "react";
import styled from "styled-components";

import Theme from "../theme";

export default styled.div`
    display: flex;
    flex-wrap: wrap;
    > * {
        flex: 1 0 20rem;
        display: ${({rigid}) => rigid ? "initial" : "flex"};
        flex-direction: ${({columns}) => columns ? "column" : "row"};
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`;

