import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';



//Stateless Functional Component
const Main = (props) => {

    const { books, moveShelf } = props; //Destructuring

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
                            books
                            .filter(book => book.shelf === 'currentlyReading')
                            .map(book => (
                                <li key = {book.id}>
                                <Book
                                book = {book}
                                moveShelf = {moveShelf}
                                currentShelf = 'currentlyReading'
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
                            books
                            .filter(book => book.shelf === 'wantToRead')
                            .map(book => (
                                <li key = {book.id}>
                                <Book
                                book = {book}
                                moveShelf = {moveShelf}
                                currentShelf = 'wantToRead'
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
                            books
                            .filter(book => book.shelf === 'read')
                            .map(book => (
                                <li key = {book.id}>
                                <Book
                                book = {book}
                                moveShelf = {moveShelf}
                                currentShelf = 'read'
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
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    );
}

export default Main;