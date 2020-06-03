import React from 'react';
import './App.scss';
import BooksContainer from './BooksContainer';
import AddBook from './AddBook';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.googleBooks = 'AIzaSyAESFTdUf9THRX481gN1QQVo-kekK_471k';
    console.log(JSON.parse(localStorage.getItem('library')));
    this.state = {

      library: localStorage.getItem('library') ? JSON.parse(localStorage.getItem("library")).sort((a, b) => {
        return a.isRead - b.isRead;
      }) : [
        {
          isRead: false,
          title: 'Learning React',
          author: 'Alex Banks, Eve Porcello',
          pages: '350',
          cover:
            'http://books.google.com/books/content?id=ycTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        {
          isRead: true,
          title: 'Vue.js Programming by Example',
          author: 'Agus Kurniawan',
          pages: '200',
          cover:
            'http://books.google.com/books/content?id=JDw8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
      ],
      error: '',
    };
    localStorage.setItem('library',JSON.stringify(this.state.library))
    console.log(JSON.parse(localStorage.getItem("library")))
  }
  editFormSubmit = (index, e) => {
    let newLib = this.state.library.map((book, i) => {
      if (index === i) {
        book.title = e.target.title.value;
        book.author = e.target.author.value;
        book.pages = e.target.pages.value;
      }
      return book;
    });
    localStorage.setItem('library',JSON.stringify(newLib));
    this.setState({
      library: [...JSON.parse(localStorage.getItem("library"))],
    });
  };

  addBook = (val) => {
    let response;
    if (val.length >= 3) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?&fields=items(volumeInfo(title,authors,pageCount,imageLinks(thumbnail)))&q=${val}&maxResults=1&key=${this.googleBooks}`
      )
        .then((data) => {
          data.json().then((result) => {
            response = result.items[0].volumeInfo;
            if (
              !this.state.library.find((book) => {
                return book.title === response.title;
              })
            ) {
              localStorage.setItem("library",JSON.stringify([
                {
                  isRead: false,
                  title: response.title,
                  author: response.authors
                    ? response.authors.toString()
                    : 'unknown',
                  pages: response.pageCount ? response.pageCount : 'unknown',
                  cover: response.imageLinks.thumbnail,
                },
                ...this.state.library,
              ]));
              this.setState({
                library:JSON.parse(localStorage.getItem('library')),
                error: '',
              });
            } else {
              this.setState({
                error: 'You already added this book',
              });
              setTimeout(() => {
                this.setState({
                  error: '',
                });
              }, 3000);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  deleteBook = (index) => {
    console.log(index);
    localStorage.setItem("library",JSON.stringify([
      ...this.state.library.filter((book, i) => {
        return index !== i;
      }),
    ]));
    this.setState({
      library:JSON.parse(localStorage.getItem("library")),
    });
  };
  changeReadStatus = (index) => {
    let newLib = this.state.library.map((book, i) => {
      if (index === i) {
        book.isRead = !book.isRead;
      }
      return book;
    });
    localStorage.setItem("library",JSON.stringify(newLib));
    this.setState({
      library: [
        ...JSON.parse(localStorage.getItem("library")).sort((a, b) => {
          return a.isRead - b.isRead;
        }),
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Library</h1>
        <AddBook error={this.state.error} addBook={this.addBook} />
        <BooksContainer
          editFormSubmit={this.editFormSubmit}
          changeReadStatus={this.changeReadStatus}
          library={this.state.library}
          deleteBook={this.deleteBook}
        />
      </div>
    );
  }
}

export default App;
