import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Layout from './layout';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter basename='/'>
          <div className="container">
            <Header />
            <Layout />
          </div>
        </BrowserRouter>
    )
  }
}
