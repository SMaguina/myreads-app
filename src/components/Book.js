import React from 'react';
import PropTypes from 'prop-types';

// verify that the book object has all required properties. And set alternative if not available
const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
const title = book.title ? book.title : "Title Not Available"
const authors = book.authors ? book.authors : ["Author Not Available"]

return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}></div>
        <div className="book-shelf-changer">
          {/* when clicked, you pass two arguments: book that has been passed in Book as props, and the click event */}
          <select value={book.shelf} id={book.id} onChange={(e)=>onShelfChange(book, e.target)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors.map(author=>
          <p key={author}>{author}</p>
      )}
      </div>
    </div>
  )
}

Book.PropTypes = {
  book: PropTypes.object.isRequired,
  ShelfChange: PropTypes.func.isRequired
}

export default Book;
