import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'
import * as style from "./openinghours.module.css"
import logo from "../images/test.jpg"
import Layout from "../components/layout"

const OpeningHours = () => (
    <Layout>
        <Row>
            <Col className={style.colSettings}>
            <div className={style.colorbg}></div>
                {/* <img className={style.blockImg} src={logo} alt="bild" /> */}
            </Col>
            <Col className={style.colSettings}>
                <div className={style.openingHours}>
                    <Row>
                        <Col lg={8} className={style.pb}><h5>RECEPTIONENS ÖPPETTIDER</h5></Col>
                        <Col><h5 className={style.pb} >FRUKOST</h5></Col>
                    </Row>
                    <Row>
                        <Col><p>Måndag- torsdag</p></Col>
                        <Col><p>06.30-20.00</p></Col>
                        <Col><p>06.30-09.00</p></Col>
                    </Row>
                    <Row>
                        <Col><p>Fredag</p></Col>
                        <Col><p>06.30-15.00</p></Col>
                        <Col><p>06.30-09.00</p></Col>
                    </Row>
                    <Row className={style.mb} >
                        <Col lg={4} ><p>Lördag-söndag</p></Col>
                        <Col lg={4} ><p>Stängt</p></Col>
                    </Row>
                    <Row>
                        <Col><h5 className={style.pb}>LILLY’S BISTROS ÖPPETTIDER</h5></Col>
                    </Row>
                    <Row>
                        <Col lg={4} ><p>Öppet månd-torsdag</p></Col>
                        <Col><p>18-00-20.00</p></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className={style.mb}>
                                Nyckelkortet ni har fått till ert rum behöver ni även för att komma in till och från receptionen/restaurangdelen. Utöver öppettider har ni en sidodörr bredvid som ni kan använda dygnet runt
                            </p>
                            <i>Vid tidig avresa vänligen checka ut kvällen innan.</i>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Layout>
)

export default OpeningHours