import React from 'react'

export default ({carers}) =>
  <div>
    <p>Opiekunowie:</p>
    <ul>
      {carers.map(carer => (
        <li key={carer}>{carer}</li>
      ))}
    </ul>
  </div>
