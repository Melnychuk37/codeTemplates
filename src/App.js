import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {

  componentDidMount() {
    alert('templates')
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
