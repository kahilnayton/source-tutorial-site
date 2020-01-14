import React from 'react'
import { graphql } from 'gatsby'



const HomePage = ({data}) => {
  return (
    <div>
     Hello!
     <h1> 
      {data.allPixabayPhoto.id}
      </h1>
    </div>
  )
}
export const query = graphql`
  {
    allPixabayPhoto {
      edges {
        node {
          id
          imageSize
          likes
          previewURL
          tags
          user_id
          type
        }
      }
    }
  }
`
export default HomePage