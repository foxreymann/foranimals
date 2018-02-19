import React from 'react';
import Markdown from 'react-markdown';
import ModalImage from 'react-modal-image'

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
          <ul className="list-unstyled d-flex flex-wrap">
            {gallery.map(handle => (
              <li className="mr-2 mb-2">
                <ModalImage
                  small={`https://media.graphcms.com/resize=w:150,fit:crop/${handle}`}
                  large={`https://media.graphcms.com/resize=w:500,fit:crop/${handle}`}
                  alt="Hello World!"
                />
              </li>
            ))}
          </ul>
          <Markdown
            source={adoption.desc}
            escapeHtml={false}
          />
        </article>
      </div>
    );
  }
}

export default Adoption
