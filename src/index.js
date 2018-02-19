import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

//const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/starterBlog'
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cjbodt3bk06gq0153k8p4f0jp'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
