import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage'
import MyReads from './components/MyReads'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({ books })
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
              <MyReads
                books={this.state.books}
                />
            )}/>
          <Route path="/search" render={() => (
              <SearchPage
                books={this.state.books}
                />
            )}/>
        </Switch>
    </BrowserRouter>
    )
  }
}

export default BooksApp
