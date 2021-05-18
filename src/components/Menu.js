/**
 * Creates hierarchical menu based on WordPress menu.
 * @link https://www.wpgraphql.com/docs/menus/#hierarchical-data
 */
 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import {Link} from "gatsby"
 import { FlatListToHierarchical } from "../utils/FlatListToHierarchical"
 import { StaticImage } from "gatsby-plugin-image"

 import * as style from "./mainNav.module.css"
import Restaurant from "../pages/restaurant"

 
 const Menu = () => {
    
   return (
    <nav >
       <ul>
           <li>
                <Link to="/ourRooms/">Våra rum</Link>
                <ul>
                        <li>
                            <Link to="/offers/">Erbjudanden</Link>
                        </li>
                        <li>
                            <Link to="/discount/">Presentkort</Link>
                        </li>
                </ul>
            </li> 
            <li>
                <Link to="/restaurant/">Restaurang</Link>
                <ul>
                    <li>
                        <Link to="/bistro/">Lillys bistro</Link>
                    </li>
                    <li>
                        <Link to="/lunch/">Dagens lunch</Link>
                    </li>
                </ul>
            </li> 
            <li>
                <Link to="/events/">Konferens & Event</Link>
            </li>
            <li>
                <Link to="/contact/">Kontakta oss"</Link>
            </li>
           
        </ul>
     </nav>
   )
 }
 
 export default Menu