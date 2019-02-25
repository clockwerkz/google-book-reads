import React from 'react';      

const Book = (props) => {
    const { book } = props;

    return (
        <li className='book'>
            <div className='book__image-container'>
                <img
                    className='book__image-thumbnail' 
                    src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? 
                    (book.volumeInfo.imageLinks.thumbnail):('https://via.placeholder.com/128X170?text=No%20Image')} 
                    alt={book.volumeInfo.title}/>
            </div>
            <h3>{book.volumeInfo.title ? (book.volumeInfo.title):('Unknown')}</h3>
            <p>{book.volumeInfo.authors ? (book.volumeInfo.authors.reduce((prev, author)=> prev+', '+author)):('Unknown')}</p>
        </li>
    );
}

export default Book;