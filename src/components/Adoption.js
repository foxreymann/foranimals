import React from 'react';
import Markdown from 'react-markdown';
import ModalImage from 'react-modal-image'
import Carer from './Carer'
import Neutered from './Neutered'

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
    adoption.image.map(image => gallery.push(image.handle))

    return (
      <div>
        <article className="adopt">
          <div className="">
            <h2>{adoption.name}</h2>
            { adoption.carer ?
              <Carer carers={adoption.carer} /> : null
            }
            <ul className="list-unstyled d-flex flex-wrap gallery">
              {gallery.map((handle, i) => (
                <li className="mr-2 mb-2" key={i}>
                  <ModalImage
                    small={`https://media.graphcms.com/resize=w:150,fit:crop/${handle}`}
                    large={`https://media.graphcms.com/resize=w:500,fit:crop/${handle}`}
                    alt={adoption.name}
                  />
                </li>
              ))}
            </ul>

            <Markdown
              source={adoption.desc}
              escapeHtml={false}
            />
            { typeof adoption.neutered !== 'undefined' ?
              <Neutered neutered={adoption.neutered} /> : null
            }
          </div>
        </article>
      </div>
    );
  }
}

export default Adoption
