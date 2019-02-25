import React from 'react';      

const Book = (props) => {
    console.log(props);
    const { book } = props;
    return (
        <li className='book'>
            <div className='book__image-container'>
                <img
                    className='book__image-thumbnail' 
                    src={book.volumeInfo.imageLinks.thumbnail} 
                    alt={book.volumeInfo.title}/>
            </div>
            {book.volumeInfo.title}
            {book.volumeInfo.authors[0]}
        </li>
    );
}

export default Book;