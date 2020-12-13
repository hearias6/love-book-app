import React, {component} from 'react';

class BookList extends React.Component {

  render() {

    return (
      <section className="column is-12">
        {
          this.props.books.map(book=> 
            <article className="subtitle size-5 box" key={book.title}> 
              <div className="media">
                <div className="media-content">
                  {book.title} 
                </div>
                <div className="media-right">
                  <button className="button is-info">Edit</button>
                  &nbsp;
                  <button className="button is-success">Detail</button>
                  &nbsp;
                  <button className="button is-danger">Remove</button>
                </div>                
              </div>              
            </article>
          )
        }        
      </section>
    )
  };
}

export default BookList;