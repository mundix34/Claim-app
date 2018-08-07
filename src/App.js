import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
          {routes}
          {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
