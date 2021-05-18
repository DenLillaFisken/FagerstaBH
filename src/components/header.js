import PropTypes from "prop-types"
import React, { useState } from "react"
import {Link} from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import MainNav from "./mainNav"
import Menu from "./Menu"
import Logo from "./logo"
import * as style from "./header.module.css"

const Global = createGlobalStyle`
  body, html{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`

const MenuIcon = styled.button`
  position: fixed;
  top:2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3vw;
  height: 3vw;
  background: transperant;
  border: none;
  cursor: pointer;
  z-index: 5;

  div{
    width: 2.8vw;
    height: .2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position relative;
    transition: opacity 1000ms, transform 1000ms;

    :first-child{
      transform: ${({nav}) => nav ? 'rotate(45deg)': 'rotate(0)'}
    }

    :nth-child(2){
      opacity: ${({nav}) => nav ? '0': '1'}
    }

    :nth-child(3){
      transform: ${({nav}) => nav ? 'rotate(-45deg)': 'rotate(0)'}
    }
  }
`
const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: cemter;
  align-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 1000ms;
  transform: ${({nav}) => nav ? "translateX(0)": "translateX(100%)"};
  }
`

const Header = () => {
  
  const [nav, showNav] = useState(false)

return(
  <div>
<header>
    <Global />
    
    <MenuLinks nav={nav}>
      <Menu />
    </MenuLinks>
    
  </header>
  <MenuIcon nav={nav} onClick={ () => showNav(!nav)}>
      <div />
      <div />
      <div />
    </MenuIcon>
  </div>
  
)
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header