import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {

  componentDidMount() {
    alert(`Привет, спасибо что заглянул. Надеюсь стили не сильно ломают глаза =) 

    Там будут две ссылки, в которых еще парочка. По нажатию появятся темплейты. Сделал через проект, чтобы можно было переключаться по примерах. Не знаю, может было бы лучше просто скинуть скрипт, но решил сделать более презентабельно.

    Спасибо за время,

    Хорошего дня `)
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
