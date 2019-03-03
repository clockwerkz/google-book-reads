import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { fetchData } from '../helpers/bookreads';

class Main extends Component {

    state = {
        books: '',
        searchText: ''
    }

    onChangeSearchInput = (event) => {
        const searchText = event.target.value;
        this.setState({searchText});
    }

    onSubmitSearchInput = async (event) => {   
        event.preventDefault();  
        if (this.state.searchText) {
            const books = await fetchData(this.state.searchText);
            if (books) {
                return this.setState({ books });
            } 
        }
        this.setState({ books: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.onSubmitSearchInput(event)}>
                    <input type="text" 
                    onChange={(event) => this.onChangeSearchInput(event)}
                    value = {this.state.searchText}
                    />
                </form>
                <h1>Google Books</h1>
                <BookShelf books={this.state.books}/>
            </div>
        )
    }

}

export default Main;