import React from 'react'
import { graphql } from 'react-apollo'
import Adoption from './Adoption'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 4

const Adoptions = ({ data: { loading, error, allAdoptions, _allAdoptionsMeta }, loadMoreAdoptions }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center">Error fetching posts!</h1>
    </div>
  )
  if (!loading) {
    const areMoreAdoptions = allAdoptions.length < _allAdoptionsMeta.count
    return (
      <section>
        <div className='News-ul'>
          {allAdoptions.map(adoption => <Adoption key={adoption.id} adoption={adoption} />)}
        </div>
        <div className='News-showMoreWrapper'>
          {areMoreAdoptions
            ? <button className='News-button' onClick={() => loadMoreAdoptions()}>
              {loading ? 'Ładuję...' : 'Pokaż więcej'}
            </button>
            : ''}
        </div>
      </section>
    )
  }
  return (
    <div className="content">
      <h2 className="text-center">Ładuję...</h2>
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
})(Adoptions)
