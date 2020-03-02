import React from 'react'
import { graphql } from 'react-apollo'
import Adoption from './Adoption'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 100

const Adoptions = ({ data: { loading, error, adoptions, adoptionsConnection }, loadMoreAdoptions }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center">Error fetching posts!</h1>
    </div>
  )
  if (!loading) {
console.log(adoptions)
    const areMoreAdoptions = adoptions.length < adoptionsConnection.aggregate.count
    localStorage.setItem('adoptions', JSON.stringify(adoptions));
    return (
      <section>
        <div className='News-ul'>
          {adoptions.map(adoption => <Adoption key={adoption.id} adoption={adoption} />)}
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
    <article className="content">
      <h2 className="text-center">Ładuję...</h2>
    </article>
  )
}

export const allAdoptions = gql`
  query adoptions($first: Int!, $skip: Int!) {
    adoptions(orderBy: date_DESC, first: $first, skip: $skip) {
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
    adoptionsConnection {
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
