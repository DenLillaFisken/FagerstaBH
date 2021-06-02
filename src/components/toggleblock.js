import * as React from "react"
import {Link} from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'
import img from "../images/test.jpg"

import * as style from "./toggleblock.module.css"

const ToggleBlock = () => {

    return (
        <div className={style.wrapper2}>
            <a href="/outRooms/" >
                <div className={style.fixed}>
                    
                </div>                
                <div className={style.blockDiv}>
                    <div className={style.line}></div>
                    <h5>Våra rum</h5>
                    <div className={style.line}></div>
                </div>
            </a>
        </div>
    )
}

export default ToggleBlock;