import React, { Component } from 'react';

class BookShelf extends Component {
    state = {
        test: 'test'
    }

    render() {
       const { books } = this.props;
       return (
           <div>
               {books ? (
                <div>
                    <h3>There are Books</h3>
                </div>
                ):(
                <div>
                <h3>There are no Books</h3>
                </div>
            )}
           </div>
       )
    }
}


export default BookShelf;