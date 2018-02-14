import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'
import catPlaceholder from '../assets/cat.svg'
import Moment from 'react-moment';

const Post = ({ data: { loading, error, post } }) => {
  if (error) return <h1 className="text-center mt-5">Error fetching the post!</h1>
  if (!loading) {
    return (
      <article>
        <div className='Post-placeholder'>
          <img
            alt={post.title}
            src={ post.image ? `https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.image.handle}` : catPlaceholder }
          />
        </div>
        <h2>{post.title}</h2>
        <div>
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
  return <h2 className="mt-5">Loading post...</h2>
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
