/**
 * Creates hierarchical menu based on WordPress menu.
 * @link https://www.wpgraphql.com/docs/menus/#hierarchical-data
 */
 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import UniversalLink from "../utils/UniversalLink"
 import { FlatListToHierarchical } from "../utils/FlatListToHierarchical"
 import { StaticImage } from "gatsby-plugin-image"

 import * as style from "./mainNav.module.css"

 const MenuLoop = ({ menuItems }) => {
   return (
     <ul> 
       {menuItems.map((menuItem, index) => {
         return (
           <li
             key={index}
             className={menuItem.routes.length > 0 ? "has-submenu" : undefined}
           >
             <UniversalLink to={menuItem.path} activeClassName="current-page">
               {menuItem.title}
             </UniversalLink>
             {menuItem.routes.length > 0 && (
               
               <MenuLoop menuItems={menuItem.routes}></MenuLoop>
             )}
           </li>
         )
       })}
     </ul>
   )
 }
 
 const MainNav = () => {
   
   const wpMenu = useStaticQuery(graphql`
     {
       allWpMenuItem(
         sort: { fields: order, order: ASC }        
       ) {
         nodes {
           id
           title: label
           path
           target
           parent: parentId
         }
       }
     }
   `)
   
   console.log("Raw data:", wpMenu.allWpMenuItem.nodes)
   const headerMenu = FlatListToHierarchical(wpMenu.allWpMenuItem.nodes, {
     idKey: "id",
     childrenKey: "routes",
     parentKey: "parent",
   })
   console.log("headerMenu: ", headerMenu)
 
   return (
    <nav className={style.mainnav} >
       <StaticImage
        src="../images/test.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
       {headerMenu.length > 0 && <MenuLoop menuItems={headerMenu}></MenuLoop>}
     </nav>
   )
 }
 
 export default MainNav