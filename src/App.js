import React from 'react';
import './App.scss';
import BooksContainer from './BooksContainer';
import AddBook from './AddBook';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [
        {
          isRead: false,
          title: 'Lord of The Rings',
          author: 'J.R.Tolkien',
          pages: '394',
          cover:
            'http://books.google.com/books/content?id=luXhAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        {
          isRead: true,
          title: 'Lord of The Rings',
          author: 'J.R.Tolkien',
          pages: '394',
          cover:
            'http://books.google.com/books/content?id=luXhAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
      ],
    };
  }
  editFormSubmit = (index,e) => {
   let newLib = this.state.library.map((book,i) => {
     if (index === i) {
       book.title = e.target.title.value;
       book.author = e.target.author.value;
       book.pages = e.target.pages.value;
     }
     return book
   })

   this.setState({
     library: [...newLib],
   })
   
    }

  addBook = (val,e) => {
    e.preventDefault();
    console.log(val)
  }
  deleteBook =  (index) => {
    console.log(index)
    this.setState({
      library: [...this.state.library.filter((book,i) => {
        return index !== i;
      })]
    })
  }
  changeReadStatus = (index) => {
    let newLib = this.state.library.map((book, i) => {
      if (index === i) {
        book.isRead = !book.isRead;
      }
      return book;
    });
    this.setState({
      library: [...newLib],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Library</h1>
        <AddBook addBook = {this.addBook}/>
        <BooksContainer
          editFormSubmit = {this.editFormSubmit}
          changeReadStatus={this.changeReadStatus}
          library={this.state.library}
          deleteBook = {this.deleteBook}
        />
      </div>
    );
  }
}

export default App;
