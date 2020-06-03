import React from 'react';

export default class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  inputHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    let val = this.state.value;
    return (
      <form id="new-book-form" onSubmit={this.props.addBook.bind(this, val)}>
            <label for = 'newBook'>{this.props.error} </label>
            <div className ='new-book-input' >
              <input
                id = "newBook"
                type="text"
                name="newBook"
                value={this.state.value}
                onChange={this.inputHandler}
                placeholder= "Enter book's full title"
              />
              <input type="submit" name="newBook" value="Add" />
         </div>
      </form>
    );
  }
}
