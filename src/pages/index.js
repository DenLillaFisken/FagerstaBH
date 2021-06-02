import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Block1 from "../components/block1";
import Block2 from "../components/block2";
import Block3 from "../components/block3";
import SideWidget from "../components/sideWidget";
import * as style from "./index.module.css";
import { Parallax } from "react-parallax";
import Widget from "../components/widget";

import img from "../images/img1.jpg";

function IndexPage () {
  return(
    <Layout> 
      
      <div className={style.imgWrapper}>
        <Parallax className={style.start} bgImage={ img } strength={250}>
          
          <div className={style.punshline}>
            <h1>Fagersta brukshotell</h1>
            <h1> - a place to just be</h1>
          </div>
          <div className={style.bookRoomBtn}>
            {/* <img src={widget} alt="test" /> */}
            <div id="widgetContainer"></div>
            <Widget />
          </div>
        </Parallax>
      </div>

      <SideWidget />

      <Block1 />
      <Block3 />
      <Block2 />
    </Layout>
  );
}

export default IndexPage


    {/* <StaticImage
    src="http://fagerstabrukshotell.local/wp-content/uploads/2021/05/jay-wennington-N_Y88TWmGwA-unsplash-1-scaled.jpg"
    width={300}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="A Gatsby astronaut"
    className="fullBackground"
    /> */}