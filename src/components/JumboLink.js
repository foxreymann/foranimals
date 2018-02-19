import React from 'react';
import { Link } from 'react-router-dom';

const JumboLink = ({link}) =>
    <Link to={link.link} className="col-md-6 btn btn-outline btn-xl js-scroll-trigger Jumbo-link p-3" style={{height: '150px'}}>
      <i className={`${link.icon} fa-3x`} />
      <h3>{link.title}</h3>
      <div>{link.text}</div>
    </Link>

export default JumboLink
