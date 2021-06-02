import PropTypes from "prop-types"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Link} from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import {Layout} from 'react-bootstrap'

import logo from "../images/logo-h.png"

import MainNav from "./mainNav"
import Menu from "./Menu"
import Logo from "./logo"
import * as style from "./sideWidget.module.css"


const WidgetBtn= styled.nav`
position: absolute;
top: 19vw;
left: 10vw;
display: flex;
align-items: center;
flex-direction: column;
width: 40vw;
height: 20vh;
overflow-x: hidden;
z-index: 0;
cursor: pointer;
background-color: #283c3a;
transition: transform 1000ms;
border-radius: 3px;
transform: ${({nav}) => nav ? "translateX(-80%)": "translateX(-115%)"};
`

const WidgetBox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: cemter;
  align-content: center;
  text-align: center;
  height: 32vh;
  width: 15%;
  background-color: #283c3a;
  z-index: 5;
  position: fixed;
  border-radius: 3px;
  top: 33vh;
  left: 0;
  transition: transform 1000ms;
  transform: ${({nav}) => nav ? "translateX(0)": "translateX(-100%)"};
  }
`

const Header = () => {
  
  const [nav, showNav] = useState(false)

  return(
    <div>

        <WidgetBtn className={style.btn2} onClick={ () => showNav(!nav)}  nav={nav}>
            
                <div className={style.lineSection}>
                    <div className={style.menuLine} />
                        <p className={style.widgetText}>BOKA RUM</p>
                    <div className={style.menuLine} />
                </div>
           
        </WidgetBtn> 
        <WidgetBox nav={nav} >
         
        </WidgetBox>

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