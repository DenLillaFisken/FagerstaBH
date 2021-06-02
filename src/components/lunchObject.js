// import React, { Component } from 'react';
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import Header from "../components/header"
// import Footer from "../components/footer"




// const LunchObject = (props, {data}) => {
    
   

// return(
//     <div>
//         <Header />
//         {/* <h1>{props.day}</h1> */}

//         {data.wpPost.featuredImage && (
//         <figure>
//         <Img
//         fluid={data.wpPost.featuredImage.node.localFile.childImageSharp.fluid}
//         alt={data.wpPost.featuredImage.node.altText}
//         />
//         </figure>
//         )}
//         <h1>{data.wpPost.title}</h1>
//         <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />

//         <Footer />
//     </div> 
// )
    
    
// }

// export default LunchObject

// const {data} = (query, {
//     variables: { day: props.day },
// });

// export const query = graphql`
// query($day: String!){  
//     wpPost(tags: {nodes: {elemMatch: {name: {eq: "LunchDag"}}}}
//     title: {eq: $day}
//     ){
//         title
//         content
//         featuredImage {
//             node {
//                 altText
//                 localFile {
//                     childImageSharp {
//                     fluid(maxWidth: 1360) {
//                         ...GatsbyImageSharpFluid
//                         }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `