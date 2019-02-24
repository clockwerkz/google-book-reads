import React, { Component } from 'react';
import BookShelf from './BookShelf';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Google Books</h1>
                <BookShelf books={true}/>
            </div>
        )
    }

}

export default Main;