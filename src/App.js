import React from 'react'
// import * as BooksAPI from './BooksAPI'

import Search from './Search';
import Main from './Main';

import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Main />
      </div>
    )
  }
}

export default BooksApp
