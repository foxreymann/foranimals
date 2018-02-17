import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import catPlaceholder from '../assets/cat.svg'
import Moment from 'react-moment'

const POSTS_PER_PAGE = 4

const News = ({ data: { loading, error, allPosts, _allPostsMeta }, loadMorePosts }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center">Error fetching posts!</h1>
    </div>
  )
  if (!loading) {
    const areMorePosts = allPosts.length < _allPostsMeta.count
    return (
      <section className="content">
        <ul className='News-ul'>
          {allPosts.map(post => (
            <li className='News-li mb-5' key={`post-${post.id}`}>
              <Link to={`/post/${post.slug}`} className='News-link'>
                <div className='News-placeholder'>
                  <img
                    alt={post.title}
                    className='News-img img-fluid'
                    src={ post.image ? `https://media.graphcms.com/resize=w:600,fit:crop/${post.image.handle}` : catPlaceholder }
                  />
                </div>
                <h5 className="mt-3"><Moment format="DD/MM/YYYY">
                  {post.date}
                </Moment></h5>
                <h4 className="mt-2">{post.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <div className='News-showMoreWrapper'>
          {areMorePosts
            ? <button className='News-button' onClick={() => loadMorePosts()}>
              {loading ? 'Loading...' : 'Show More Posts'}
            </button>
            : ''}
        </div>
      </section>
    )
  }
  return (
    <div className="content">
      <h2 className="text-center">Loading posts...</h2>
    </div>
  )
}

export const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: date_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      date
      image {
        handle
      }
    },
    _allPostsMeta {
      count
    }
  }
`

export const allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(allPosts, {
  options: {
    variables: allPostsQueryVars
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          })
        }
      })
    }
  })
})(News)
