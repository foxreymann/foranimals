import React from 'react';
import SubscribeForm from '../SubscribeForm'

const formProps = {
  action: 'https://foranimals.us17.list-manage.com/subscribe/post?u=8ce191ed37a0fc0aca5ecd011&amp;id=cdc577d0c9',
  messages: {
    inputPlaceholder: "First Name",
    inputPlaceholder: "Email Address",
    btnLabel: "Subscribe",
    sending: "Please wait...",
    success: "Please check your email to verify address",
    error: "Error, please re-enter your email address"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}

export default () =>
  <section class="text-center">
    <div class="container p-3">
      <h2 class="pb-3">Subscribe to our newsletter</h2>
      <SubscribeForm {...formProps}/>
    </div>
  </section>
