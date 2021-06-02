/**
 * Creates hierarchical menu based on WordPress menu.
 * @link https://www.wpgraphql.com/docs/menus/#hierarchical-data
 */
 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import {Link} from "gatsby"
 import { FlatListToHierarchical } from "../utils/FlatListToHierarchical"
 import { StaticImage } from "gatsby-plugin-image"
 import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.min.js";
 import {Row, Col} from 'react-bootstrap'
 import * as style from "./menu.module.css"
import Restaurant from "../pages/restaurant"


 const Menu = () => {
    
   return (
    <Row className={style.menuWrapper}>
        <Col className={style.menuBlock2}>
            <div >
                <div className={style.menuBlock}>
                    <div className={style.lineSection}>
                        <div className={style.menuLine} />
                            <Link className={style.boldText} to="/ourRooms/">Våra rum</Link>
                        <div className={style.menuLine} />
                    </div>
                </div>
                <div className={style.menuBlock}>
                    <Link className={style.smallText}  to="/offers/">Erbjudanden</Link>
                </div>
                <div className={style.menuBlock}>
                    <Link className={style.smallText}  to="/discount/">Presentkort</Link>
                </div>
            </div>
        </Col>
        <Col className={style.menuBlock2}>
            <div className={style.menuBlock2}>
                <div className={style.menuBlock}>
                    <div className={style.lineSection}>
                        <div className={style.menuLine} />
                            <Link className={style.boldText} to="/restaurant/">Restaurangen</Link>
                        <div className={style.menuLine} />
                    </div>
                </div>
                <div className={style.menuBlock}>
                    <Link className={style.smallText}  to="/lunch/">Lunch</Link>
                </div>
                <div className={style.menuBlock}>
                    <Link className={style.smallText}  to="/bistro/">Lilly's Bistro</Link>
                </div>
            </div>
        </Col>
        <Col className={style.menuBlock2}>
            <div className={style.menuBlock2}>
            <div className={style.menuBlock}>
                <div className={style.lineSection}>
                    <div className={style.menuLine} />
                        <Link className={style.boldText} to="/about/">Om oss</Link>
                    <div className={style.menuLine} />
                </div>
            </div>
            <div className={style.menuBlock}>
                <Link className={style.smallText} to="/openinghours/">Öppettider</Link>
            </div>
            <div className={style.menuBlock}>
                <Link className={style.smallText} to="/contact/">Kontakta oss</Link>
            </div>
            <div className={style.menuBlock}>
                <Link className={style.smallText} to="/events/">Event & Konferens</Link>
            </div>
            <div className={style.menuBlock}>
                <Link className={style.smallText} to="/gallery/">Galleri</Link>
            </div>
            </div>
        </Col>
    </Row>
   )
 }
 
 export default Menu



//  <Col className={style.dFlex}>
//  <div className={style.cross}>

//  </div>
//  <div className={style.menuBlock1}>
//      <div className={style.menuBlock}>
//          <Link className={style.boldText} to="/ourRooms/">
//              <div className={style.line}></div>
//              Våra rum
//              <div className={style.line}></div>
//          </Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/offers/">Erbjudanden</Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/discount/">Presentkort</Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/testWidget/">Widget</Link>
//      </div>

//      <div className={style.menuBlock}>
//          <Link className={style.boldText} to="/restaurant/">
//              <div className={style.line}></div>
//              Restaurang
//              <div className={style.line}></div>
//          </Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/lunch/">Lunchmeny</Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/bistro/">Lilly's Bistro</Link>
//      </div>
 
//      <div className={style.menuBlock}>
//          <Link className={style.boldText} to="/ourRooms/">
//              <div className={style.line}></div>
//              Om oss
//              <div className={style.line}></div>
//          </Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/offers/">Öppettider</Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/discount/">Event & Konferens</Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/testWidget/">Kontakta oss</Link>
//      </div>
//      <div className={style.menuBlock}>
//          <Link className={style.smallText} to="/testWidget/">Galleri</Link>
//      </div>

//  </div>
// </Col>