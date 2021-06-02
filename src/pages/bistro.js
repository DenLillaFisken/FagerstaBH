import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'
import * as style from "./bistro.module.css"
import logo from "../images/test.jpg"
import lillys from "../images/lillys.svg"
import Layout from "../components/layout"
import Footer from "../components/footer"
import { Parallax } from "react-parallax";
import {Link} from "gatsby"
import img from "../images/img1.jpg";

const Bistro = () => (
    <Layout>
        <div className={style.wrapper}>
            {/* <Parallax className={style.halfImg} bgImage={ img } strength={250}>
        
            </Parallax> */}
            <Parallax className={style.halfImg} bgImage={ img } blur={{ min: 2, max: 7}}>
             
             </Parallax>
            <Row className={style.halfColor}>
                
            </Row>
            <img className={style.LillysImg} src={lillys} alt="bild" />
            <div className={style.bookBtn} >
                <div className={style.menuLine} />
                    <Link className={style.btnLink} to="/ourRooms/">
                        <h5 className={style.textW} >BOKA BORD</h5> 
                    </Link>
                <div className={style.menuLine} />        
            </div>
        </div>



        
        <div className={style.blockDiv}>
            <div className={style.lineL}></div>
                <h3>MENY</h3>
                <div className={style.lineL}></div>
        </div>
        <Row>
            <Col className={style.splitDiv1} >
                <div className={style.colorbg}></div>
                {/* <img className={style.blockImg} src={logo} alt="bild" /> */}
            </Col>
        </Row>
        <div className={style.blockDivS}>
            <div className={style.lineM}></div>
                <h4>SNACKS</h4>
            <div className={style.lineM}></div>
        </div>
        <div className={style.menuRowDiv}>
            <Row className={style.menuRow}>
                <Col className={style.menuCol} >
                    
                </Col>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
                <Col className={style.menuCol} >
                    
                </Col>
            </Row>
        </div>


        <Row>
            <Col className={style.splitDiv1} >
                <div className={style.colorbg}></div>
                {/* <img className={style.blockImg} src={logo} alt="bild" /> */}
            </Col>
        </Row>
        <div className={style.blockDivS}>
            <div className={style.lineM}></div>
                <h4>VARMRÄTTER</h4>
                <div className={style.lineM}></div>
        </div>
        <div className={style.menuRowDiv}>
            <Row className={style.menuRow}>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
            </Row>
        </div>
        <div className={style.menuRowDiv}>
            <Row className={style.menuRow}>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
            </Row>
        </div>

        <Row>
            <Col className={style.splitDiv1} >
                <div className={style.colorbg}></div>
                {/* <img className={style.blockImg} src={logo} alt="bild" /> */}
            </Col>
        </Row>
        <div className={style.blockDivS}>
            <div className={style.lineM}></div>
                <h4>EFTERRÄTTER</h4>
            <div className={style.lineM}></div>
        </div>
        <div className={style.menuRowDiv}>
            <Row className={style.menuRow}>
                <Col className={style.menuCol} >
                    <h5>Marinerade oliver</h5>
                    <p>Massa text om maten osv.</p>
                    <p>55kr</p>
                </Col>
            </Row>
        </div>
        <Footer />
    </Layout>
)

export default Bistro
