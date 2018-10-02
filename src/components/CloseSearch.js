import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CloseSearch extends Component {
  render() {
    return(
      <React.Fragment>
          <Link
            to="/"
            className="close-search">Close</Link>
        </React.Fragment>
    )
  }
}
