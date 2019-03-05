import React, { useState } from 'react';
import BookShelf from './BookShelf';
import { fetchData } from '../helpers/bookreads';

const Main =(props) => {

    // state = {
    //     books: '',
    //     searchText: '',
    //     isLoading: false,
    // }

    const [ books, setBooks ] = useState([]);
    const [ searchText, setSearchText ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const onChangeSearchInput = (event) => {
        const searchText = event.target.value;
        setSearchText(searchText);
    }

    const onSubmitSearchInput = (event) => {
        setIsLoading(true);  
        event.preventDefault();  
        if (searchText) {
            fetchData(searchText)
                .then(books => {
                    if (books) {
                        setBooks(books);
                    } else {
                        console.log('no valid books returned so reset search');
                        setBooks([]);
                    }
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setBooks([]);
                    setIsLoading(false);
                })
        }
        setBooks([]);
        setIsLoading(false);
    }

    // loadMoreBooks = async () => {
    //     this.setState({ isLoading:true})   
    //     if (this.state.searchText) {
    //         const books = await fetchMoreData(this.state.searchText);
    //         if (books) {
    //             return this.setState({ books, isLoading: false });
    //         } 
    //     }
    //     this.setState({ books: '', isLoading: false });
    // }

  
    return (
        <div className="container">
            <h1 className="project__title">Google Books</h1>
            <form 
                className="books__search-form"
                onSubmit={(event) => onSubmitSearchInput(event)}>
                <input type="text"
                className="books__search-box" 
                onChange={(event) => onChangeSearchInput(event)}
                value = {searchText}
                placeholder="Search for Books here..."
                />
                <button className="btn btn--submit" type="submit">Search</button>
            </form>
            {isLoading ? 
                (<h3 className="loading-message">Loading...</h3>):
                (<BookShelf books={books}/>)}
        </div>
    )
  

}

export default Main;