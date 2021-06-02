import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Block1 from "../components/block1";
import Block2 from "../components/block2";
import Block3 from "../components/block3";
import SideWidget from "../components/sideWidget";
import { Parallax } from "react-parallax";
import img from "../images/img1.jpg";
import { useStaticQuery, graphql } from "gatsby"
import * as style from "./gallery.module.css"

  const Gallery = () => {

  const data = useStaticQuery(graphql`

  query MyQuery {
    wpPost(databaseId: {eq: 129}) {
      fagersta_acf_menu {
        menuheader1
        menuheader2
        menuheader3
        logo {
          sourceUrl
        }
      }
    }
  }
  

`)



console.log(data);
  return(
    <Layout> 
      
    <div>{data.wpPost.fagersta_acf_menu.menuheader1}</div>
   
    <img src={data.wpPost.fagersta_acf_menu.logo.sourceUrl} />
    </Layout>
  );
}




export default Gallery


// __html: data.wpPost.fagersta_acf_menu.gallery