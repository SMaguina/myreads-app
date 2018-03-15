import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import Searchbook from './components/Searchbook';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books:[]
  }

// Get all books from the server
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books:books })
    }).catch( () =>
      alert("Error when fetching all books")
    )
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks
            books={this.state.books}
            onSelfChange={this.shelfChange}
          />
        )}/>
        <Route path="/searchbook" render={()=> (
          <Searchbook
            books={this.state.books}
            onSelfChange={this.shelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
