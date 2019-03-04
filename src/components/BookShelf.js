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
                {props.moreBooksToLoad ? (<button className="btn" onClick={props.loadMoreBooks}>Load More</button>):('')}
            </div>
            ):(
            <div>
            <h3 className="bookshelf__message">There Are No Books To Display</h3>
            </div>
        )}
        </div>
    );      
}


export default BookShelf;