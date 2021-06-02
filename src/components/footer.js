import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'

import * as style from "./footer.module.css"

const Footer = () => {
    return(
        
        <div>
            <Row className={style.topFooter}>

            </Row>  
            <Row className={style.footer}>
                <Col className={style.innerDiv}>

                </Col>
                <Col lg={3} className={style.innerDiv}>
                    <h5>ÖPPETTIDER:</h5>
                    <div className={style.line}></div>
                    <p className={style.footerText}>Måndag - Tordag: 06:30 - 20:00 </p>
                    <p className={style.footerText}>Fredagar: 06:30 - 15:00 </p>
                    <p className={style.footerText}>Lördagar - Söndagar: Stängt</p>
                </Col>
                <Col lg={3} className={style.innerDiv}>
                    <h5>FÖLJ OSS:</h5>
                    <div className={style.line}></div>
                    <p className={style.footerText}>Facebook</p>
                    <p className={style.footerText}>Instagram</p>
                    <p className={style.footerText}>Tripadvisor</p>
                </Col>
                <Col lg={3} className={style.innerDiv}>
                    <h5>KONTAKTA OSS:</h5>
                    <div className={style.line}></div>
                    <p className={style.footerText}>Blomstervägen 1</p>
                    <p className={style.footerText}>737 44 Fagersta</p>
                    <p className={style.footerText}>+46 223 170 60</p>
                </Col>
                <Col className={style.innerDiv}>

                </Col>    
            </Row>    
            <div className={style.bottomFooter}></div>
        </div> 
    )
}

export default Footer