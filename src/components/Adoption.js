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
      console.log(gallery);
      gallery.push(image.handle);
    })

    return (
      <div>
        <article className="Post">
          <h2>{adoption.name}</h2>
          <Markdown
            source={adoption.desc}
            escapeHtml={false}
          />
        <ul className="list-unstyled d-flex flex-wrap">
            {gallery.map(handle => (
              <li className="mr-2 mb-2"><img
                src={`https://media.graphcms.com/resize=w:150,fit:crop/${handle}` }
              /></li>
            ))}
          </ul>
        </article>
      </div>
    );
  }
}

export default Adoption
