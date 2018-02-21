import React from 'react'

export default ({carers}) =>
  <div>
    <span>Opiekunowie:</span>
    {carers.map(carer => (
      <span className="comma" key={carer}> {carer}</span>
    ))}
  </div>
