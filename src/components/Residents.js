import React from 'react'
import { graphql } from 'react-apollo'
import Resident from './Adoption'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 100

const Residents = ({ data: { loading, error, residents, residentsConnection }, loadMoreResidents }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center">Error fetching posts!</h1>
    </div>
  )
  if (!loading) {
    const areMoreResidents = residents.length < residentsConnection.aggregate.count
    return (
      <section>
        <div className='News-ul'>
          {residents.map(resident => <Resident key={resident.id} adoption={resident} />)}
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
    <article>
      <h2 className="text-center">Ładuję...</h2>
    </article>
  )
}

export const residents = gql`
  query residents($first: Int!, $skip: Int!) {
    residents(orderBy: date_DESC, first: $first, skip: $skip) {
      id
      name
      date
      image {
        handle
      }
      desc
      carer
    },
    residentsConnection {
      aggregate {
        count
      }
    }
  }
`

export const queryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(residents, {
  options: {
    variables: queryVars
  },
  props: ({ data }) => ({
    data,
    loadMoreResidents: () => {
      return data.fetchMore({
        variables: {
          skip: data.residents.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            residents: [...previousResult.residents, ...fetchMoreResult.residents]
          })
        }
      })
    }
  })
})(Residents)
