import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Block1 from "../components/block1"
import Block2 from "../components/block2"
import Block3 from "../components/block3"

import * as style from "./index.module.css"

const Events = () => (
    
    <Layout> 
        <Seo title="Home" />

        <div className={style.start}>
            <div className={style.punshline}>
                <h1>Fagersta brukshotell</h1>
                <h1> - a place to just be</h1>
            </div>
            <div className={style.bookRoomBtn}>
                <div id="widgetContainer"></div>
            </div>
        </div>
        <Block1 />
        <Block3 />
        <Block2 />
    </Layout>

)

export default Events