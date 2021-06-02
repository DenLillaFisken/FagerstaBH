import React, { Component } from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'

import logo from "../images/test.jpg"
import * as style from "./lunch.module.css"

import LunchObject from "../components/lunchObject"

const Lunch = () => {

    return(
        <Layout>
    
            <div>
                <div className={style.fullImg}>

                </div>
                <div className={style.lunchmenu}> 
                    <div  className={style.lunch}>
                        <div className={style.day}>
                            <div className={style.line}></div>
                            <h3>VECKANS LUNCH</h3>
                            <div className={style.line}></div>
                        </div>
                    
                        <h4>Måndag</h4>
                        <p>Maträtt 1</p>
                        <p>Maträtt 2</p>

                        <h4>Tisdag</h4>
                        <p>Maträtt 1</p>
                        <p>Maträtt 2</p>

                        <h4>Onsdag</h4>
                        <p>Maträtt 1</p>
                        <p>Maträtt 2</p>

                        <h4>Torsdag</h4>
                        <p>Maträtt 1</p>
                        <p>Maträtt 2</p>

                        <h4>Fredag</h4>
                        <p>Maträtt 1</p>
                        <p>Maträtt 2</p>

                        <h4>Veckans vegan</h4>
                        <p>Maträtt 1</p>
                    <p>Maträtt 2</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
   
}

export default Lunch

// <Row className={style.margin}>
// <Col className={style.splitDiv2} >

// </Col>
// <Col className={style.splitDiv2} >

// </Col>
// <Col className={style.splitDiv2} >

// </Col>
// </Row>

// <Row className={style.margin}>
// <Col className={style.splitDiv2} >

// </Col>
// <Col className={style.splitDiv2} >

// </Col>
// <Col className={style.splitDiv2} >

// </Col>
// </Row>