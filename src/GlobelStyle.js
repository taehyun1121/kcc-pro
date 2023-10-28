import { createGlobalStyle } from "styled-components";

const GlobelStyle = createGlobalStyle`
    :root{
        --main-font: 1.6rem;
    }
    html{ font-size: 62.5%; }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
    }

`;

export default GlobelStyle;
