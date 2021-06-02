import * as React from "react"
import {Link} from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'
import { Parallax } from "react-parallax";
import img from "../images/img2.jpg";
import img1 from "../images/img3.jpg";
import img2 from "../images/img1.jpg";

import * as style from "./block3.module.css"

const Block3 = () => {

    return (
        <div className={style.wrapper}>
            <Row>
                <Col className={style.splitDiv1}>
                    <Parallax className={style.box} bgImage={ img } strength={-250}>
                
                    </Parallax>
                </Col>
                <Col className={style.splitDiv2}>
                    <Parallax className={style.box} bgImage={ img1 } strength={-400}>
                
                </Parallax>
                </Col>
                <Col className={style.splitDiv}>
                    <Parallax className={style.box} bgImage={ img2 } strength={-300}>
             
                    </Parallax>
                </Col>
            </Row>
            <div className={style.wrapper2}>
                <a href="/restaurant/" >
                    <div className={style.fixed}>
                        
                    </div>                
                    <div className={style.blockDiv}>
                        <div className={style.line}></div>
                        <h5>Restaurangen</h5>
                        <div className={style.line}></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Block3;