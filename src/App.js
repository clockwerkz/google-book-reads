import React, { Component } from 'react';
import Main from './components/Main';
import './css/main.css'

class App extends Component {
  componentDidMount() {
    document.title="Google Books Search"
  }
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
