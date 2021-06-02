import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'
import logo from "../images/test.jpg"
import styled, { createGlobalStyle } from "styled-components"
import * as style from "./restaurant.module.css"

import Layout from "../components/layout"
import { Parallax } from "react-parallax";

import img from "../images/img1.jpg";

const Restaurant = () => (
    
    <Layout>
    <div className={style.imgWrapper}>
        <Parallax className={style.fullImg} bgImage={ img } strength={250}>
        
     
        </Parallax>
    </div>
      
        <div className={style.restaurantMenu}>
                <a className={style.dFlex} href="/lunch/">
                    <div className={style.line}></div>
                    <h5>LUNCHMENY</h5>
                    <div className={style.line}></div>
                </a>
                <a className={style.dFlex} href="/lunch/">
                    <div className={style.line}></div>
                    <h2>BOKA BORD</h2>
                    <div className={style.line}></div>
                </a>
                <a className={style.dFlex} href="/bistro/">
                    <div className={style.line}></div>
                    <h5>LILLY'S BISTRO</h5>
                    <div className={style.line}></div>
                </a>
            </div>
    </Layout>

)

export default Restaurant

