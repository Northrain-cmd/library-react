import React from 'react';
import BookInfo from './BookInfo';

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      editScreen: false,
    };
  }
  showInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  editScreen = () => {
    this.setState({
      editScreen: !this.state.editScreen,
    });
  };
  editFormSubmit = (e) => {
    this.editScreen();
    this.props.editFormSubmit(e);
  };
  render() {
    const isRead = this.props.bookInfo.isRead;
    return (
      <div className="book">
        <div
          className="book-cover"
          style={{ backgroundImage: `url(${this.props.bookInfo.cover})` }}
        >
          {this.state.showInfo && (
            <BookInfo
              editFormSubmit={this.editFormSubmit}
              editScreen={this.state.editScreen}
              editBook={this.editScreen}
              deleteBook={this.props.deleteBook}
              bookInfo={this.props.bookInfo}
            />
          )}
        </div>
        <div className="button-group">
          <button onClick={this.showInfo} id="info-button">
            i
          </button>
          <button
            onClick={this.props.changeReadStatus}
            id="read-button"
            style={{
              backgroundColor: isRead ? 'darkorange' : 'darkgrey',
            }}
          >
            {isRead ? 'Read' : 'Not Read'}
          </button>
        </div>
      </div>
    );
  }
}
