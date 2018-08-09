import React from 'react'
import { Route } from 'react-router-dom'

import Search from './Search';
import Main from './Main';

import * as BooksAPI from './BooksAPI'
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
    console.log(this.state.books); //debugger
  }

    moveShelf = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(item => item.id !== book.id).concat([book])
        }))
      })
    }

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() => (
        <Main
        books={this.state.books}
        moveShelf={this.moveShelf}
        />
      )}/>

      <Route path="/search" render={() => (
        <Search
        moveShelf = {this.moveShelf}
        books={this.state.books}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp
