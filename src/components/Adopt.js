import React from 'react'
import { graphql } from 'react-apollo'
import Adoption from './Adoption'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 4

const Adopt = ({ data: { loading, error, allAdoptions, _allAdoptionsMeta }, loadMoreAdoptions }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center">Error fetching posts!</h1>
    </div>
  )
  if (!loading) {
console.log(allAdoptions)
    const areMoreAdoptions = allAdoptions.length < _allAdoptionsMeta.count
    return (
      <section>
        <ul className='News-ul'>
          {allAdoptions.map(adoption => <Adoption key={adoption.id} adoption={adoption} />)}
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
      desc
      sex
      species
      neutered
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
