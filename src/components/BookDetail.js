import React, {component} from 'react';

class BookDetail extends React.Component {

  render() {

    const { book } = this.props;

    return (
      <div>
        {           
          <div>
            <h1> 
                {book.title} 
            </h1>
            <p>
                {book.description}
            </p>
            <h5>
                {book.author}
            </h5>
            <button>
                Delete
            </button>
          </div> 
        }        
      </div>
    )
  };
}

export default BookDetail;