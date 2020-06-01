import React from 'react';

export default function EditBook (props) {
    function editFormSubmit (e)  {
        e.preventDefault();
        props.editFormSubmit(e);
    }
    return (
        <React.Fragment>
        <form className = 'edit-form' onSubmit = {editFormSubmit}>
            <input type = 'text' name = "title" required defaultValue = {props.bookInfo.title}></input>
            <input type = 'text' name ="author" required defaultValue = {props.bookInfo.author}></input>
            <input type = 'text' name ="pages" minLength = '1' maxLength = '5' required defaultValue = {props.bookInfo.pages} ></input>
            <input type = 'submit' value = 'Save'></input>
          
        </form>
        </React.Fragment>
        
    )
}