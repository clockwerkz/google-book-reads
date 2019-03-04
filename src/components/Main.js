import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { fetchData } from '../helpers/bookreads';

class Main extends Component {

    state = {
        books: '',
        searchText: '',
        isLoading: false,
        moreBooksToLoad: false,
        booksLoaded: 0
    }

    onChangeSearchInput = (event) => {
        const searchText = event.target.value;
        this.setState({searchText});
    }

    onSubmitSearchInput = async (event) => {
        this.setState({ isLoading:true})   
        event.preventDefault();  
        if (this.state.searchText) {
            const books = await fetchData(this.state.searchText);
            if (books) {
                return this.setState({ books, isLoading: false });
            } 
        }
        this.setState({ books: '', isLoading: false });
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

    render() {
        return (
            <div className="container">
                <h1 className="project__title">Google Books</h1>
                <form 
                    className="books__search-form"
                    onSubmit={(event) => this.onSubmitSearchInput(event)}>
                    <input type="text"
                    className="books__search-box" 
                    onChange={(event) => this.onChangeSearchInput(event)}
                    value = {this.state.searchText}
                    placeholder="Search for Books here..."
                    />
                    <button className="btn btn--submit" type="submit">Search</button>
                </form>
                {this.state.isLoading ? 
                    (<h3 className="loading-message">Loading...</h3>):
                    (<BookShelf books={this.state.books}/>)}
            </div>
        )
    }

}

export default Main;