import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class OpenSearch extends Component {
  render() {
    return(
      <React.Fragment>
          <nav className="open-search">
            <Link
              to='/search'>Add a book</Link>
          </nav>
        </React.Fragment>
    )
  }
}
