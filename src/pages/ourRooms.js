import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'
import logo from "../images/test.jpg"
import Layout from "../components/layout"
import Footer from "../components/footer"
import {Link} from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { Parallax } from "react-parallax";

import img from "../images/img1.jpg";
import * as style from "./ourRooms.module.css"


const OurRooms = () => (
  <Layout>
    <div className={style.marginB}>

    
    <div className={style.wrapper}>
      <div className={style.halfDiv1}>
        <Parallax className={style.halfImg} bgImage={ img } blur={{ min: 1, max: 5}}>
          <div className={style.bookBtn} >
              <div className={style.menuLine} />
                  <Link className={style.btnLink} to="/ourRooms/">
                      <h5 className={style.textW} >BOKA DUBBELRUM</h5> 
                  </Link>
              <div className={style.menuLine} />        
          </div>
        </Parallax>
        {/* <div className={style.fluid}>
          <div className={style.dFlex}>
            <div className={style.line}></div>
              <h5 className={style.textW}>Läs mer</h5>
            <div className={style.line}></div>
          </div>
        </div> */}
      </div>
      <div className={style.halfDiv2}>
        <Parallax className={style.halfImg} bgImage={ img } blur={{ min: 2, max: 7}}>
          <div className={style.bookBtn} >
              <div className={style.menuLine} />
                  <Link className={style.btnLink} to="/ourRooms/">
                      <h5 className={style.textW} >BOKA DUBBELRUM</h5> 
                  </Link>
              <div className={style.menuLine} />        
          </div>
        </Parallax>
       
      </div>
      <div className={style.fluid}>
          <div className={style.dFlex}>
            <div className={style.line}></div>
              <h5 className={style.textW}>Läs mer</h5>
            <div className={style.line}></div>
          </div>
          <Row>
              <Col className={style.container}>
                <Row>
                    <p>Våra enkelrum har en HÄSTENS säng på 90 cm, 
                        inredning i klassisk svensk design och parkettgolv.
                        Vi har ett rum anpassat för rörelsehindrade, 
                        där dörren är extra bred, inga trösklar finns i rummet 
                        samt att toaletten är speciellt anpassad med såväl larm 
                        direktkopplat till receptionen som andra tillbehör 
                        för att göra det extra bekvämt.
                    </p>
                </Row>
                <Row className={style.marginT}>
                    <h5>Faciliteter</h5>
                </Row>
                <Row>
                  <Col>
                    <p>Dusch eller badkar</p>
                  </Col>
                  <Col>
                    <p>Gratis WiFi</p>
                  </Col>
                  <Col>
                      <p>Husdjur tillåtna</p> 
                  </Col>
                  <Col>
                    <p>Sen utcheckning</p>
                  </Col>
                </Row>
                <Row className={style.marginT}>
                    <h5>Rumsinformation</h5>
                </Row>
                <Row>
                  <Col>
                      <p>Storlek: 12kvm</p>
                  </Col>
                  <Col>
                    <p>Max antal extra-sängar: 1</p>
                  </Col>
                  <Col>
                    <p>Max antal personer: 2</p>
                  </Col>
                </Row>
              </Col>
              {/* <div className={style.verticalLine}></div> */}
              <Col className={style.container}>
                <Row>
                    <p>Våra enkelrum har en HÄSTENS säng på 90 cm, 
                        inredning i klassisk svensk design och parkettgolv.
                        Vi har ett rum anpassat för rörelsehindrade, 
                        där dörren är extra bred, inga trösklar finns i rummet 
                        samt att toaletten är speciellt anpassad med såväl larm 
                        direktkopplat till receptionen som andra tillbehör 
                        för att göra det extra bekvämt.
                    </p>
                </Row>
                <Row className={style.marginT}>
                    <h5>Faciliteter</h5>
                </Row>
                <Row>
                  <Col>
                      <p>Garderob</p>
                      <p>Skrivbord</p>
                      <p>Badrum</p>
                  </Col>
                  <Col>
                      <p>Dusch eller badkar</p>
                      <p>WC</p>
                      <p>Hårtork</p>
                  </Col>
                  <Col>
                      <p>Husdjur tillåtna</p>
                      <p>Vattenkokare</p>
                      <p>Byxpress</p>
                      <p>Sen utcheckning</p>
                  </Col>
                  <Col>
                      <p>Gratis WiFi</p>
                      <p>Platt-TV</p>
                      <p>Telefon</p>
                      <p>Radio</p>
                      <p>Väckarklocka</p>
                  </Col>
                </Row>
                <Row>
                    <h5>Rumsinformation</h5>
                </Row>
                <Row>
                  <Col>
                      <p>Storlek: 12kvm</p>
                      <p>Max antal extra-sängar: 1</p>
                      <p>Max antal personer: 2</p>
                  </Col>
                  <Col>
                      <p>Antal personer i ordinarie sängar: 1</p>
                      <p>Minst antal personer: 1</p>
                      <p>Enkelsäng</p>
                  </Col>
                </Row>
              </Col>
            </Row>
        </div>
    </div>
    </div>
    <Footer />
  </Layout>
)

export default OurRooms



{/* <Row>
    <Col className={style.full}>
        <div className={style.colorbg}>

        <h1 className={style.bookRoom}>BOKA DUBBELRUM</h1>

        </div>
       
        <a className={style.hiddenBooking} href="/restaurant/" >
          <div className={style.showHidden}>
              Läs mer
          </div>
          <div className={style.content}>
              content
          </div>
      </a>   
    </Col>
    <Col className={style.full}>
        <div className={style.colorbg2}>
          <h1 className={style.bookRoom}>BOKA ENEKLRUM</h1>
        </div>
       
      
    </Col>
  </Row> */}