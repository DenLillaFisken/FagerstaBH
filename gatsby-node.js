/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


//This will create all the pages from wordpress
const path = require(`path`)

exports.createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions

    //Query all the data
    const queryResult = await graphql(`
        {
            pageQuery: allWpPage {
                nodes {
                    databaseId
                    uri
                }
            }
        }
    `)
    if(queryResult.errors) {
        reporter.panic("error loading events", queryResult.errors)
        return
    }

    //Generate singel page pages
    const pages = queryResult.data.pageQuery.nodes
    pages.forEach(page => {
        createPage({
            path: page.uri,
            component: path.resolve(`./src/templates/page.js`),
            context: {
                //Data passed to context is available
                //in page queries as GraphQL variables.
                databaseId: page.databaseId,
            },
        })
    })
}