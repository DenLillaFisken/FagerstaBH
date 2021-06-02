import Async from 'react-async';
import React, { useState, useEffect } from 'react';



    const Widget = () => {
 

        const [widget, setWidget] = useState([]);
    
        useEffect(() => {
         
            const loadWidget = async () => {
                const response = await fetch("https://onlie.bookvisit.com/v2/widget/getwidget?channelId=56b734f3-8829-40af-927e-9f27f2cf7f37&openOption=redirect&culture=sv-SE&layout=StandardWide&containerId=widgetContainer&displayPromoCode=true&displayCorpCode=false&displayIATACode=false&displayCalendarStartsAtFirstAvailableDay=true&lengthOfStay=2&currency=SEK");
                const data = await response.json();
                setWidget(data.Widget);
            };
            loadWidget();
            console.log('USE EFFECT');
        }, []);




        const test = createMarkup(widget);
        console.log(test);
      return (
        
        <div>
            <div dangerouslySetInnerHTML={test} />
        </div>
      )

    }
    function createMarkup(tohtml) {

        return {__html: tohtml};
    }

    export default Widget;


