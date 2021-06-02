import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'
import * as style from "./contact.module.css"
import logo from "../images/test.jpg"

import Layout from "../components/layout"
import Block1 from "../components/block1"
import GoogleMaps from "./googlemap"


const Contact = () => (
    
<Layout>
    <div className={style.wrapper}>
        <GoogleMaps className={style.map} />

        <div className={style.contactForm}>
            <div className={style.dFlex} href="/lunch/">
                <div className={style.line}></div>
                <h5>LUNCHMENY</h5>
                <div className={style.line}></div>
            </div>
            <form>
                <input type="text" placeholder="Namn" />
                <input type="text" placeholder="Epost"/>
                <input type="text" placeholder="Ämne"/>
                <textarea rows="7" cols="50" placeholder="Meddelande..."></textarea>
                <button>Skicka</button>
            </form>
        </div>
    </div>
    <Block1 />

    <Block1 />
    
    </Layout>

)

export default Contact