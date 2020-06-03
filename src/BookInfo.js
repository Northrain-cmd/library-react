import React from 'react';
import EditBook from './EditBook';

export default function BookInfo(props) {
  return (
    <div className="book-info">
      <button id="edit-button" onClick={props.editBook}>
        Edit
      </button>
      {props.editScreen && (
        <EditBook
          editFormSubmit={props.editFormSubmit}
          bookInfo={props.bookInfo}
        />
      )}
      <h3>{props.bookInfo.title}</h3>
      <h3>by {props.bookInfo.author}</h3>
      <h3>Pages:{props.bookInfo.pages}</h3>
      <div className="delete-div">
        <i onClick={props.deleteBook}>x</i>
      </div>
    </div>
  );
}
