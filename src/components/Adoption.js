import React from 'react';

class Adoption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.state.adoption = props.adoption
  }

  render() {
    return (
      <article className="Post">
        <h2>{this.state.adoption.name}</h2>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </article>
    );
  }
}

export default Adoption
