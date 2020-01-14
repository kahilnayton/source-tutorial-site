import React from 'react'
import { Link, graphql } from 'gatsby'



class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const photos = data.allPixabayPhoto.largeImageURL

    // debugger;
      
    return (
      <div>
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>

          {data.allPixabayPhoto.edges.map(({ node }, index) => (
            <div key={index}>
              <img src={node.largeImageURL} alt="Image url"/>
              <p>Likes - {node.likes}</p>
              <p>Type - {node.type}</p>
              <p>Views - {node.views}</p>
              <p>Tags - {node.tags}</p>
              <p>User - {node.user}</p>
            </div>
          ))}
      </div>
    )
  }
}

export const pageQuery = graphql`
{
  allPixabayPhoto {
    edges {
      node {
        id
        user
        imageSize
        largeImageURL
        likes
        previewURL
        tags
        user_id
        type
        views
      }
    }
  }
  allNewsArticle {
    nodes {
      id
      author
      title
      urlToImage
    }
  }
  site {
    siteMetadata {
      title
      description
    }
  }
}


`

export default IndexPage