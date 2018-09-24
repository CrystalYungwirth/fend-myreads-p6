import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import 'normalize.css';
import SearchPage from './components/SearchPage'
import MyReads from './components/MyReads'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      {
        shelf: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        shelf: 'wantToRead',
        title: 'Want to Read'
      },
      {
        shelf: 'read',
        title: 'Read'
      }
    ],

    SearchResults: [],
    query: ''
  }

  getAllBooks(){
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
  }

  componentDidMount(){
    this.getAllBooks()
  }

  updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks()
    })
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchResults(query);
  }

  updateSearchResults = (query) => {
    if (query) {
      BooksAPI.search(query).then((SearchResults) => {
        if (SearchResults.error) {
          this.setState({ SearchResults: [] });
        } else {
          this.setState({ SearchResults });
        }
      })
    } else {
      this.setState({ SearchResults: [] });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
              <MyReads
                books={this.state.books}
                shelves={this.state.shelves}
                updateBookshelf={this.updateBookshelf}
                />
            )}/>
          <Route path="/search" render={() => (
              <SearchPage
                books={this.state.books}
                updateBookshelf={this.updateBookshelf}
                updateQuery={this.state.updateQuery}
                updateSearchResults={this.state.updateSearchResults}
                />
            )}/>
        </Switch>
    </BrowserRouter>
    )
  }
}

export default BooksApp
