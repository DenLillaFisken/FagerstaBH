import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Row, Col} from 'react-bootstrap'
import * as style from "./openinghours.module.css"
import logo from "../images/test.jpg"
import Layout from "../components/layout"
import Widget from "../components/Widget"
import { Suspense } from "react";
import Helmet from "react-helmet"
import $ from "jquery"

 <Helmet>
<script charset="UTF-8" type="text/javascript" src="https://online.bookvisit.com/Content/flexwidget/FlexWidgetFullScripts.min.js"></script>
<scrip>
`
        (function($) {
        $.getJSON('"https://online.bookvisit.com/v2/widget/getwidget?channelId=56b734f3-8829-40af-927e-9f27f2cf7f37&openOption=redirect&culture=sv-SE&layout=StandardWide&containerId=widgetContainer&displayPromoCode=true&displayCorpCode=false&displayIATACode=false&displayCalendarStartsAtFirstAvailableDay=true&lengthOfStay=2&currency=SEK', function(json)
        { $('#widgetContainer').html(json.Widget); })} (bvJQuery);
    `
</scrip>
</Helmet>

const TestarWidget = () => (
    <Layout> 
      
    <div className={style.start}>
      {/* <div>
            <div dangerouslySetInnerHTML={test} />
        </div> */}
        <Suspense>
        {/* <div className={style.bookRoomBtn}>
        <div id="widgetContainer"></div>
      </div> */}
        <Widget />
        </Suspense>
      
    </div>
  </Layout>
)

export default TestarWidget