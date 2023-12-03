import { createGlobalStyle } from "styled-components";

const GlobelStyle = createGlobalStyle`
    :root{
        --main-font: 1.6rem;

        --gray-line-op100:rgba(205,205,205,1);
        --tertiary-100: rgba(124, 160, 210, 1);
        --tertiary-80: rgba(124,160,210,.8);
        --tertiary-60: rgba(124,160,210,.6);
        --tertiary-20: rgba(124,160,210,.2);
        --tertiary-10: rgba(124,160,210,.1);

        --grayBasice-100:rgba(146,146,146,1);
        --grayBasice-80:rgba(146,146,146,.8);
        --grayBasice-60:rgba(146,146,146,.6);
        --grayBasice-40:rgba(146,146,146,.4);
        --grayBasice-10:rgba(146,146,146,.1);
    }
    html{ font-size: 62.5%; }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
    }
    button{
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        background: transparent;
    }
    li{
        list-style: none;
    }
`;

export default GlobelStyle;
