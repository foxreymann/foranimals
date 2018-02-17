import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import catPlaceholder from '../assets/cat.svg'
import Moment from 'react-moment'

const POSTS_PER_PAGE = 4

const Adopt = ({ data: { loading, error, allAdoptions, _allAdoptionsMeta }, loadMoreAdoptions }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center">Error fetching posts!</h1>
    </div>
  )
  if (!loading) {
    const areMoreAdoptions = allAdoptions.length < _allAdoptionsMeta.count
    return (
      <section className="content">
        <ul className='News-ul'>
          {allAdoptions.map(post => (
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
          {areMoreAdoptions
            ? <button className='News-button' onClick={() => loadMoreAdoptions()}>
              {loading ? 'Loading...' : 'Show More Adoptions'}
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

export const allAdoptions = gql`
  query allAdoptions($first: Int!, $skip: Int!) {
    allAdoptions(orderBy: date_DESC, first: $first, skip: $skip) {
      id
      name
      date
      image {
        handle
      }
    },
    _allAdoptionsMeta {
      count
    }
  }
`

export const queryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(allAdoptions, {
  options: {
    variables: queryVars
  },
  props: ({ data }) => ({
    data,
    loadMoreAdoptions: () => {
      return data.fetchMore({
        variables: {
          skip: data.allAdoptions.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allAdoptions: [...previousResult.allAdoptions, ...fetchMoreResult.allAdoptions]
          })
        }
      })
    }
  })
})(Adopt)
