import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

function ListBooks (props) {
  const { books, onShelfChange } = props

  // Don't repeat yourself
  const shelves = [
    {sectionName:"Currently Reading", books:books.filter( b => b.shelf === "currentlyReading")},
    {sectionName:"Want to Read", books:books.filter( b => b.shelf === "wantToRead")},
    {sectionName:"Read", books:books.filter( b => b.shelf === "read")}
  ]

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {/* pass in two arguments, the shelf object, and the index */}
        {shelves.map( (shelf, index) => (
          <BookShelf
            key={index}
            sectionName={ shelf.sectionName }
            books={ shelf.books }
            onShelfChange={ onShelfChange }
          />
        ))}
      </div>

      {/* Can be refactored to:
        <div className="open-search">
            <Link to="/searchbook">Add a book</Link>
        </div>
       */}

      <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
    </div>
  )
}

ListBooks.PropTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
};

export default ListBooks;
