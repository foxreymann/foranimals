import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'
import Moment from 'react-moment';

const Post = ({ data: { loading, error, post } }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center mt-5">Error fetching the post!</h1>
    </div>
  )
  if (!loading) {
    return (
      <article className="content Post">
        { post.image ?
          <div className='Post-placeholder text-center'>
            <img
              alt={post.title}
              className='News-img img-fluid'
              src={`https://media.graphcms.com/resize=w:600,fit:crop/${post.image.handle}` }
            />
          </div> : null
        }
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
      <h2 className="text-center">Ładuję stronę...</h2>
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
