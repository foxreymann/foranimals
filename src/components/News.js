import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Moment from 'react-moment'

const POSTS_PER_PAGE = 100

const News = ({ data: { loading, error, posts, postsConnection }, loadMorePosts }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center">Error fetching posts!</h1>
    </div>
  )
  if (!loading) {
    const areMorePosts = posts.length < postsConnection.aggregate.count
    return (
      <section className="content">
        <ul className='News-ul'>
          {posts.map(post => (
            <li className='News-li mb-4' key={`post-${post.id}`}>
              <Link to={`/post/${post.slug}`} className='News-link'>
                <div className='News-placeholder text-center'>
                  { post.image ?
                    <img
                      alt={post.title}
                      className='News-img img-fluid'
                      src={`https://media.graphcms.com/resize=w:600,fit:crop/${post.image.handle}` }
                    /> : ''
                  }
                </div>
                <h5 className="mt-3"><Moment format="DD/MM/YYYY">
                  {post.date}
                </Moment></h5>
                <h4 className="mt-2">{post.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <div className='News-showMoreWrapper mb-3'>
          {areMorePosts
            ? <button className='News-button' onClick={() => loadMorePosts()}>
              {loading ? 'Ładuję...' : 'Pokaż więcej'}
            </button>
            : ''}
        </div>
      </section>
    )
  }
  return (
    <article className="content">
      <h2 className="text-center">Ładuję...</h2>
    </article>
  )
}

export const posts = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: date_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      date
      image {
        handle
      }
    },
    postsConnection {
      aggregate {
        count
      }
    }
  }
`

export const postsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(posts, {
  options: {
    variables: postsQueryVars
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.posts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            posts: [...previousResult.posts, ...fetchMoreResult.posts]
          })
        }
      })
    }
  })
})(News)
