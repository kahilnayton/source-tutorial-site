import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage(props) {
  const { data } = props.data.allPixabayPhoto;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.largeImageURL}</h1>
      {/* <img>{data.largeImageURL}</img> */}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  allPixabayPhoto(limit: 10) {
    edges {
      node {
        largeImageURL
        pageURL
        tags
        user
      }
    }
  }
}
query HomePageQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
`
