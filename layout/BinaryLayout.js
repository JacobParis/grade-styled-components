import React from "react";
import styled from "styled-components";

import Theme from "../theme";

export default styled.div`
    display: flex;
    flex-wrap: wrap;
    > * {
        flex: 1 0 20rem;
        display: flex;
        flex-direction: column;
    }
`;

