import React, {component} from 'react';

class FormBook extends React.Component {

  render() {

    return (
    <section className="column is-12">
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
        </div>     
    </section>
    )
  };
}

export default FormBook;