// TODO: finish separate BookshelfBooks component
import React, { Component } from "react";
import Book from "./Book";

export default class BookShelf extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.shelves.map(shelf => (
          <article className="bookshelf" key={shelf.shelf}>
            <section>
              <h2>{shelf.title}</h2>
            </section>
            <aside className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books
                  .filter(book => book.shelf === shelf.shelf)
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        updateBookshelf={this.props.updateBookshelf}
                      />
                    </li>
                  ))}
              </ol>
            </aside>
          </article>
        ))}
      </React.Fragment>
    );
  }
}