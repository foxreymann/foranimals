import React from 'react';
import SubscribeForm from '../SubscribeForm'

const formProps = {
  action: 'https://foranimals.us17.list-manage.com/subscribe/post?u=8ce191ed37a0fc0aca5ecd011&amp;id=cdc577d0c9',
  messages: {
    inputPlaceholder: "Podaj swój e-mail",
    btnLabel: "Zapisz się",
    sending: "Zapisuję...",
    success: "Sprawdź swojego mejla aby potwierdzić subskrypcję",
    error: "Jesteś już na naszej liście"
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
  <section className="text-center">
    <div className="container subscribe">
      <h2 className="pb-3">Newsletter</h2>
      <SubscribeForm {...formProps}/>
    </div>
  </section>
