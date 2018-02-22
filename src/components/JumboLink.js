import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;

function scrollTop() {
  scroll.scrollToTop({
    duration: 0
  })
}

const JumboLink = ({link}) =>
  <div className="col-12 col-md-6">
    <Link to={link.link} onClick={scrollTop} className="col-md-12 btn btn-outline btn-xl js-scroll-trigger Jumbo-link p-3" style={{height: '150px'}}>
      <i className={`${link.icon} fa-3x`} />
      <h3>{link.title}</h3>
      <div>{link.text}</div>
    </Link>
  </div>

export default JumboLink
