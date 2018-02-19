import React from 'react';
import Markdown from 'react-markdown'

class Adoption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adoption: props.adoption
    }
  }

  render() {
    const adoption = this.state.adoption
    const gallery = []
    adoption.image.map(image => {
      gallery.push('bla')
    })
console.log(gallery)
    return (
      <article className="Post">
        <h2>{adoption.name}</h2>
        <Markdown
          source={adoption.desc}
          escapeHtml={false}
        />
      </article>
    );
  }
}

export default Adoption
