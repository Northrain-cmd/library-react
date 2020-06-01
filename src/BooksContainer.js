import React from 'react';
import Book from './Book';

export default function BooksContainer(props) {
  const books = props.library.map((book, index) => {
    return (
      <Book
        editFormSubmit = {props.editFormSubmit}
        bookInfo={book}
        key={index}
        deleteBook = {props.deleteBook.bind(this,index)}
        changeReadStatus={props.changeReadStatus.bind(this, index)}
      />
    );
  });

  return <div className="container">{books}</div>;
}
