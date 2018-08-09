import React, { Component } from 'react';


//Stateless Functional Component
const Book = (props) => {

    const { moveShelf, book } = props; //Destructuring
    let bookThumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';

    return (
        <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookThumbnail}")` }}>
                    </div>
                    <div className="book-shelf-changer">
                    {/*on click of the button on the cover of the book, call moveShelf method*/}
                    <select
                        onChange = {(event) => {
                          moveShelf(book, event.target.value)}}
                        value = {props.currentShelf}
                    >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
    );
}

export default Book;
