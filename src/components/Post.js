import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'
import catPlaceholder from '../assets/cat.svg'
import Moment from 'react-moment';

const Post = ({ data: { loading, error, post } }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center mt-5">Error fetching the post!</h1>
    </div>
  )
  if (!loading) {
    return (
      <article className="content">
        <div className='Post-placeholder'>
          <img
            alt={post.title}
            src={ post.image ? `https://media.graphcms.com/resize=w:600,fit:crop/${post.image.handle}` : catPlaceholder }
          />
        </div>
        <h2>{post.title}</h2>
        <div className="mb-3">
          <Moment format="DD/MM/YYYY">
            {post.date}
          </Moment>
        </div>
        <Markdown
          source={post.content}
          escapeHtml={false}
        />
      </article>
    )
  }
  return (
    <div className="content">
      <h2 className="text-center">Loading post...</h2>
    </div>
  )
}

export const singlePost = gql`
  query singlePost($slug: String!) {
    post: Post(slug: $slug) {
      id
      slug
      title
      image {
        handle
      }
      content
      date
    }
  }
`

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Post)
