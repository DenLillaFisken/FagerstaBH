import * as React from "react"
import {Link} from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'

import styled from "styled-components";
import * as style from "./block1.module.css"
import { Parallax } from "react-parallax";
import img from "../images/img4.jpg";

const Block1 = () => {

    return (
        <div className={style.wrapper}>
             <Parallax className={style.box} bgImage={ img } blur={{ min: -1, max: 6}}>
             
            </Parallax>
            
            <div className={style.wrapper2}>
                <a href="/ourRooms/" >
                    <div className={style.fixed}>
                        
                    </div>                
                    <div className={style.blockDiv}>
                        <div className={style.line}></div>
                        <h5>Våra rum</h5>
                        <div className={style.line}></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Block1;