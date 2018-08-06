import React from 'react'
import * as BooksAPI from './BooksAPI'

import Search from './Search';
import Main from './Main';

import './App.css'

class BooksApp extends React.Component {
  /* Create state for mutable data - books array */
  state = {
    books : []
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    console.log(this.state.books);
  }

    moveShelf = (book, shelf) => {
      BooksAPI.update(book, shelf);
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

  render() {
    
    return (
      <div className="app">
        {/*<Main 
          books = {this.state.books}
          moveShelf = {this.moveShelf}
        />*/}
        <Search />
        
      </div>
    )
  }
}

export default BooksApp
