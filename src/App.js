import './App.css';
import React from 'react'

import BookList from './components/BookList'
import MainTitle from './components/MainTitle'
import books from './repository/books.json'
import FormBook from './components/FormBook';

class App extends React.Component {

  state={
    books: books,
    createBook : false,
    showListBooks : true,
  }

  render(){
    return (
      <main className="App container">        
        <MainTitle title="Love Books" />
        <button className="button is-success">
          New
        </button>                    
        {this.state.createBook ? <FormBook /> : null}
        {this.state.showListBooks ? <BookList books={books} /> : null} 
      </main>  
    );
  }
}

export default App;
