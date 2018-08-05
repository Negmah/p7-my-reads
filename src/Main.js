import React, { Component } from 'react';
import Book from './Book';


class Main extends Component {
    render() {
        console.log(this.props.books); //debugger
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>My BookTopia</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {/* filter books array and extract all books assigned to 'Currently Reading' shelf to a new array.
                        Map over newly created 'books' array and put all values within a list */}
                        {
                            this.props.books
                            .filter(book => book.shelf === 'currentlyReading')
                            .map(book => (
                                <li key = {book.id}>
                                    {/* Declare variable 'book' in Book component to pass array created by map method*/}
                                    <Book
                                    book = {book}
                                    />
                                </li>
                            ))
                        }
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {/* filter books array and extract all books assigned to 'Currently Reading' shelf to a new array.
                        Map over newly created 'books' array and put all values within a list */}
                        {
                            this.props.books
                            .filter(book => book.shelf === 'wantToRead')
                            .map(book => (
                                <li key = {book.id}>
                                    {/* Declare variable 'book' in Book component to pass array created by map method*/}
                                    <Book
                                    book = {book}
                                    />
                                </li>
                            ))
                        }
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {/* filter books array and extract all books assigned to 'Currently Reading' shelf to a new array.
                        Map over newly created 'books' array and put all values within a list */}
                        {
                            this.props.books
                            .filter(book => book.shelf === 'read')
                            .map(book => (
                                <li key = {book.id}>
                                    {/* Declare variable 'book' in Book component to pass array created by map method*/}
                                    <Book
                                    book = {book}
                                    />
                                </li>
                            ))
                        }
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        );
    }

}


export default Main;