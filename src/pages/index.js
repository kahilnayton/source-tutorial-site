import React from 'react'
import { Link, graphql } from 'gatsby'



class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const photos = data.allPixabayPhoto.largeImageURL
      
    return (
      <div>
        <h1>Author</h1>
        <h1>title</h1>
        {/* <ul>
          {data.allNewsArticle.node.map(article => (
            <li key={article.node.id}>
              <h2>{article.node.title}</h2>
              <p>{article.node.author}</p>
              <img src={article.urlToImage} alt="Image url"/>
            </li>
          ))}
        </ul> */}
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
        largeImageURL
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