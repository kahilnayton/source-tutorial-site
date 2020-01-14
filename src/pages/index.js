import React from 'react'
import { graphql } from 'gatsby'


console.log(data)

export default ({ data }) => <>
  <h1>Author</h1>
  <h1>title</h1>
  <img>Imige</img>
  <ul>
    {data.allNewsArticle.nodes.map(article => (
      <li key={article.id}>
        <h2>{article.title}</h2>
        <p>{article.author}</p>
        <img src={article.urlToImage} alt="Image url"/>
      </li>
    ))}
  </ul>
</>


export const query = graphql`
 {
  allPixabayPhoto {
    edges {
      node {
        largeImageURL
      }
    }
  }
  allNewsArticle {
    nodes {
      author
      title
      urlToImage
    }
  }
}

`
