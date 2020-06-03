import React from 'react';

export default class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.baseState = this.state;
    this.val = this.state.value;
  }
  
  submitForm (e) {
    e.preventDefault();
    this.props.addBook(this.state.value);
    this.setState({
      value: this.baseState.value
    })
  }
  inputHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <form id="new-book-form" onSubmit={this.submitForm.bind(this)}>
        <label htmlFor="newBook">{this.props.error} </label>
        <div className="new-book-input">
          <input
            id="newBook"
            type="text"
            name="newBook"
            value={this.state.value}
            onChange={this.inputHandler}
            placeholder="Enter book's full title"
          />
          <input type="submit" name="newBook" value="Add" />
        </div>
      </form>
    );
  }
}
