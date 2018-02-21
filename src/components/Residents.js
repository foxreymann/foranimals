import React from 'react'
import { graphql } from 'react-apollo'
import Resident from './Adoption'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 4

const Residents = ({ data: { loading, error, allResidents, _allResidentsMeta }, loadMoreResidents }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center">Error fetching posts!</h1>
    </div>
  )
  if (!loading) {
    const areMoreResidents = allResidents.length < _allResidentsMeta.count
    return (
      <section>
        <div className='News-ul'>
          {allResidents.map(resident => <Resident key={resident.id} adoption={resident} />)}
        </div>
        <div className='News-showMoreWrapper'>
          {areMoreResidents
            ? <button className='News-button' onClick={() => loadMoreResidents()}>
              {loading ? 'Ładuję...' : 'Pokaż więcej'}
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

export const allResidents = gql`
  query allResidents($first: Int!, $skip: Int!) {
    allResidents(orderBy: date_DESC, first: $first, skip: $skip) {
      id
      name
      date
      image {
        handle
      }
      desc
      carer
    },
    _allResidentsMeta {
      count
    }
  }
`

export const queryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(allResidents, {
  options: {
    variables: queryVars
  },
  props: ({ data }) => ({
    data,
    loadMoreResidents: () => {
      return data.fetchMore({
        variables: {
          skip: data.allResidents.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allResidents: [...previousResult.allResidents, ...fetchMoreResult.allResidents]
          })
        }
      })
    }
  })
})(Residents)
