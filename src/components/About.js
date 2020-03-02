import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

const Page = ({ data: { loading, error, pages } }) => {
  if (error) return (
    <div className="content">
      <h1 className="text-center mt-5">Error fetching the post!</h1>
    </div>
  )
  if (!loading) {
    return (
      <article className="content Page">
        <Markdown
          source={pages[0].content}
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

export const singlePage = gql`
  query pages {
    pages (where: { slug: "about" }) {
      content
    }
  }
`

export default graphql(singlePage)(Page)
