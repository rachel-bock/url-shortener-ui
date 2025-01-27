import React, { Component } from 'react';
import './App.css';
import { getUrls, saveUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => this.setState({urls: [data.urls[0]]}));
  }

  addUrls = (newUrl) => {
    saveUrls(newUrl)
    .then(data => this.setState({urls: [...this.state.urls, data]}))
  }

  render() {
    console.log(this.state.urls)
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrls={this.addUrls}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
