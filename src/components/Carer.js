import React from 'react'

export default ({carers}) =>
  <div className="mb-3 carers-list">
    <span><em>Opiekunowie:</em></span>
    {carers.map(carer => (
      <span className="comma" key={carer}> {carer}</span>
    ))}
  </div>
