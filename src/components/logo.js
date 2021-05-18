import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as style from "./logo.module.css"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
        wpPage(databaseId: {eq: 94}) {
        featuredImage {
            node {
            altText
            title
            localFile {
                childImageSharp {
                fluid {
                    src
                    ...GatsbyImageSharpFluid
                }
                }
            }
            }
        }
        }
    }
  `)
  return (
      <div className={style.d}>
          <figure>
          <Img 
              className={style.img}
              fluid={data.wpPage.featuredImage.node.localFile.childImageSharp.fluid} 
              alt="hej"
          />    
        </figure> 
      </div>

  )
}


export default Logo

// const Logo = ({data}) => {
   
//     const test = useStaticQuery(graphql`
//     query NameOf{
//      
//     }
//     `)
//     const page = data.wpPage
  

    
    
//     return (
//         <figure>
//             <Img 
//                 fluid={page.featuredImage.node.localFile.childImageSharp.fluid} 
//                 alt="hej"
//             />
//         </figure> 
//     )
// }


// export default Logo