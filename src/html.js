import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script charset="UTF-8" type="text/javascript" src="https://online.bookvisit.com/Content/flexwidget/FlexWidgetFullScripts.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" ></script>
        <script charset="UTF-8" type="text/javascript" src="//online.bookvisit.com/Content/flexwidget/FlexWidgetFullScripts.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `https://online.bookvisit.com/v2/widget/getwidget
            var baseUrl = "";
           
            (function($) {
            $.ajax({
            dataType: 'json',
            url: baseUrl + '?channelId=56b734f3-8829-40af-927e-9f27f2cf7f37&openOption=redirect&culture=sv-SE&layout=StandardWide&containerId=widgetContainer&displayPromoCode=true&displayCorpCode=false&displayIATACode=false&displayCalendarStartsAtFirstAvailableDay=true&lengthOfStay=2&currency=SEK',
            xhrFields: { withCredentials: true },
            success: function(data) {
            $('#widgetContainer').html(data.Widget);
            }
            });
            })(bvJQuery);
        `
          }}
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            (function($) {
            $.getJSON('"https://online.bookvisit.com/v2/widget/getwidget?channelId=56b734f3-8829-40af-927e-9f27f2cf7f37&openOption=redirect&culture=sv-SE&layout=StandardWide&containerId=widgetContainer&displayPromoCode=true&displayCorpCode=false&displayIATACode=false&displayCalendarStartsAtFirstAvailableDay=true&lengthOfStay=2&currency=SEK', function(json)
            { $('#widgetContainer').html(json.Widget); })} (bvJQuery);
        `
          }}
        /> */}

        
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
