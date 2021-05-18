import React, { Component } from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"


import LunchObject from "../components/lunchObject"

const tagname = "LunchDag"
const day = "Måndag"



const Lunch = ( {data} ) => {

    // const page = data.wpPost

    return(
    
        <div>
            <Header />
            <LunchObject tagname={tagname} day={day}  />
            <Footer />
        </div> 
    
    )
   
}

export default Lunch


