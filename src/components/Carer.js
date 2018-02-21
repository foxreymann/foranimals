import React from 'react'

export default ({carers}) =>
  <div className="mb-3">
    <span>Opiekunowie:</span>
    {carers.map(carer => (
      <span className="comma" key={carer}> {carer}</span>
    ))}
  </div>
