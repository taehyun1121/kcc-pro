import styled from "styled-components";
import { NAV_WIDTH } from "../common/Layout";
import logo from "../../images/nav/lnb_logo.svg";
import { Link } from "react-router-dom";
import navIcons from "./navIcons";
import { useState } from "react";

const navItems = {
    top:[
        {
            value:"ALL",
            image: navIcons.AllIconOff,
            activeImage: navIcons.AllIconOn,
        },
        {
            value:"Search",
            image: navIcons.SearchOff,
            activeImage: navIcons.SearchOn,
        },
        {
            value:"Folder",
            image: navIcons.FolderOff,
            activeImage: navIcons.FolderOn,
        },
    ],
    bottem: [
        {
            value:"MENU_01",
            image: navIcons.Menu01Off,
            activeImage: navIcons.Menu01On,
        },
        {
            value:"MENU_02",
            image: navIcons.Menu02Off,
            activeImage: navIcons.Menu02On,
        },
        {
            value:"MENU_03",
            image: navIcons.Menu03Off,
            activeImage: navIcons.Menu03On,
        },
        {
            value:"MENU_04",
            image: navIcons.Menu04Off,
            activeImage: navIcons.Menu04Off,
        },
        {
            value:"MENU_05",
            image: navIcons.Menu05Off,
            activeImage: navIcons.Menu05On,
        },
        {
            value:"MENU_06",
            image: navIcons.Menu06Off,
            activeImage: navIcons.Menu06On,
        },
        {
            value:"MENU_07",
            image: navIcons.Menu07Off,
            activeImage: navIcons.Menu07On,
        },
        {
            value:"MENU_08",
            image: navIcons.Menu08Off,
            activeImage: navIcons.Menu08On,
        },
        {
            value:"MENU_09",
            image: navIcons.Menu09Off,
            activeImage: navIcons.Menu09On,
        },
    ]
}

const Nav = () => {
    const [selectItem, setSelectItem] = useState(null);

    const handleSelectItem = (value) => {
        if(value === selectItem) {
            setSelectItem(null);
        }else {
            setSelectItem(value);
        }
    }

    return(
        <Container width={NAV_WIDTH}>
            <h1>
                <Link to="./main">
                    <img src={logo} alt="logo" />
                    <span>kcc logo</span>
                </Link>
            </h1>
            <ul className="nav nav-top">
                { navItems.top.map((item) => {
                    return (
                        <li className="nav-item" key={`nav_${item.value}`}>
                            <button className="nav-item-button" tpye="button" onClick={() => handleSelectItem(item.value)}>
                                <img src={ item.value === selectItem ? item.activeImage : item.image } alt={item.value} />
                            </button>
                        </li>
                    )
                }) }
            </ul>
            <ul className="nav nav-bottem">
                { navItems.bottem.map((item) => {
                    return (
                        <li className="nav-item" key={`nav_${item.value}`}>
                            <button className="nav-item-button" tpye="button" onClick={() => handleSelectItem(item.value)}>
                                <img src={ item.value === selectItem ? item.activeImage : item.image } alt={item.value} />
                            </button>
                        </li>
                    )
                }) }
            </ul>
            
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    width: ${ ( { width } ) => width };
    height: 100vh;
    left: 0;
    top: 0; 
    background: #001242; 
    h1{
        width: 100%;
        height: 4.5rem;
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        img{

        }
        span{
            text-indent: -9999px;
        }
        background: #1A4298;
    }
    .nav{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 24px 0;
        gap: 16px;
        &-top{
            background: raba(0,0,0,.4);
            border-bottom: 1px solid rgba(255,255,255,.2);
        }
    }
`;

export default Nav;