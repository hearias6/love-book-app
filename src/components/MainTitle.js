import React, {component} from 'react';

class MainTitle extends React.Component {

  render() {

    const { title } = this.props;

    return (
      <header className="column is-12">
        <h1 className="title"> 
            {title} 
        </h1>                          
      </header>
    )
  };
}

export default MainTitle;