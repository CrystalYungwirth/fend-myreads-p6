import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import 'normalize.css';

import * as BooksAPI from './BooksAPI'
import SearchPage from './components/SearchPage'
import MyReads from './components/MyReads'


export default class BooksApp extends React.Component {
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
    ]
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
  }

  componentDidMount(){
    this.getAllBooks();
  }

//This was a suggestion in my last review. But now whenever I add a book from the search page the MyReads page needs reloaded before the book shows up. I'm at a loss for how come. Everything seems to be the same between the two pages. 
  updateBookshelf = (prevShelf, shelf) => {
    prevShelf.shelf = shelf
    BooksAPI.update(prevShelf, shelf)
    this.setState((state) => ({
      books: [...state.books.filter((newShelf) => newShelf.id !== prevShelf.id), prevShelf]
    }));
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
                shelves={this.state.shelves}
                updateBookshelf={this.updateBookshelf}
                />
            )}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


