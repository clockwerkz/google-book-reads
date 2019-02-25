import React from 'react';
import Book from './book';


const BookShelf = (props) => {
    const { books } = props;
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
            <h3>There Are No Books To Display</h3>
            </div>
        )}
        </div>
    );      
}


export default BookShelf;