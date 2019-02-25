import React, { Component } from 'react';
import { fetchPracticeData } from '../helpers/bookreads';
import Book from './book';

class BookShelf extends Component {
    state = {
        books: ''
    }

    componentDidMount(prevState){
        fetchPracticeData()
            .then(books => {
                this.setState({books}, ()=>console.log(books[0]));
            })
    }

    render() {
       const { books } = this.state;
       return (
           <div>
               {books ? (
                <div>
                    <ul  className='bookshelf'>
                        {books.map((book, index) => (<Book key={index} book={book} />))}
                    </ul>
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