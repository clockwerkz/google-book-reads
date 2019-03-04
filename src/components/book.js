import React from 'react';      

const Book = (props) => {

    const checkTitle = (title) => {
        if (!title) return 'title unknown';
        if (title.length > 30 ) {
            return title.substring(0,20)+"...";
        }
        return title;
    }

    const { book } = props;
    const title = checkTitle(book.volumeInfo.title);

    return (
        <li className='book'>
            <a className="book__link" href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                <div className="book__card">
                    <h3 className="book__title">{title}</h3>
                    <div className="book__body">
                        <div className='book__image-container'>
                            <img
                            className='book__image-thumbnail' 
                            src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? 
                            (book.volumeInfo.imageLinks.thumbnail):('https://via.placeholder.com/128X170?text=No%20Image')} 
                            alt={book.volumeInfo.title}/>
                        </div>
                        <div className="book-info__container">
                            <p className="book-info__text"><strong>Author(s)</strong>: {book.volumeInfo.authors ? 
                                (book.volumeInfo.authors.reduce((prev, author)=> prev+', '+author))
                                :('Unknown')}</p>
                            <p className="book-info__text"><strong>Published By:</strong> {book.volumeInfo.publisher ? (book.volumeInfo.publisher):('No information')}</p>
                        </div>
                    </div>
                    
                </div>
            </a>
            
        </li>
    );
}

export default Book;