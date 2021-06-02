import PropTypes from "prop-types"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Link} from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import {Layout} from 'react-bootstrap'

import logo from "../images/logo-h.png"
import Menu from "../components/Menu"

import * as style from "./test.module.css"

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
  width: 4vw;
  height: 3.5vw;
  border: none;
  cursor: pointer;
  z-index: 50;

  div{
    background: black;
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
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 1000ms;
  transform: ${({nav}) => nav ? "translateX(0)": "translateX(100%)"};
  }
`

const Test = () => {
  
  const [nav, showNav] = useState(false)

  return(
    <div className={style.header}>
      <header>
        <Global />
        <MenuLinks nav={nav}>
          <Menu />
        </MenuLinks>
      </header>

      <div className={style.margin}  >

         <MenuIcon className={style.hamMenu} nav={nav} onClick={ () => showNav(!nav)}>
          <div className={style.menuHamLine} />
          <div className={style.menuHamLine} />
          <div className={style.menuHamLine} />
        </MenuIcon>

      </div>
    </div>

  )
  
}

Test.propTypes = {
  siteTitle: PropTypes.string,
}

Test.defaultProps = {
  siteTitle: ``,
}

export default Test