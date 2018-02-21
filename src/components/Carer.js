import React from 'react'

export default ({carers}) =>
  <div className="d-flex flex-wrap">
    <span>Opiekunowie:</span>
    <ul className="d-flex flex-wrap carers list-unstyled">
      {carers.map(carer => (
        <li key={carer}>{carer}</li>
      ))}
    </ul>
  </div>
