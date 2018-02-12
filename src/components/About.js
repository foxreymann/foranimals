import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import catPlaceholder from '../assets/cat.svg'

const About = ({ data: { loading, error, allAuthors } }) => {
  if (error) return <h1 className="text-center m-5">Error fetching authors!</h1>
  if (!loading) {
    return (
      <div>
        {allAuthors.map(author => (
          <div className='About-author' key={author.id}>
            <div className='About-infoHeader'>
              <img
                className='About-img'
                alt={author.name}
                src={ author.avatar ? `https://media.graphcms.com/resize=w:100,h:100,fit:crop/${author.avatar.handle}` : catPlaceholder}
              />
              <h1>Hello! My name is {author.name}</h1>
            </div>
            <p>{author.bibliography}</p>
          </div>
        ))}
      </div>
    )
  }
  return <h2 className="text-center mt-5">Loading author...</h2>
}

export const allAuthors = gql`
  query allAuthors {
    allAuthors {
      id
      name
      bibliography
      avatar {
        handle
      }
    }
  }
`

export default graphql(allAuthors)(About)
