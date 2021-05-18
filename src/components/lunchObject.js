import React, { Component } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"



const LunchObject = (props, {data}) => {
 const lunchdays = data.wpPost
const test = props.day

const $tagname = "LunchDag"
const $day = "Måndag"

return(
    <div>
        <Header />
        <h1>{props.day}</h1>

        {lunchdays.wpPost.featuredImage && (
        <figure>
        <Img
        fluid={lunchdays.featuredImage.node.localFile.childImageSharp.fluid}
        alt={lunchdays.featuredImage.node.altText}
        />
        </figure>
        )}
        <h1>{lunchdays.wpPost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: lunchdays.content }} />

        <Footer />
    </div> 
)
    
    
}

export default LunchObject


export const query = graphql`
query($tagname: props.tagname!){  
    wpPost(tags: {nodes: {elemMatch: {name: {eq: $tagname}}}}
    title: {eq: $day}
    ){
        title
        content
        featuredImage {
            node {
                altText
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 1360) {
                        ...GatsbyImageSharpFluid
                        }
                        }
                    }
                }
            }
        }
    }
`