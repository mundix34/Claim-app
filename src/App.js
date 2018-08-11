import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';
import styled from 'styled-components';

const Outer = styled.div`
text-align: center;
  height: 100vh;
  width: 100%;

`
const Article = styled.article`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
padding: 1em;


`
const Head = styled.header`
flex-shrink: 0;
backgound: #26436d;


`
const Main = styled.main`
justify-content: flex-start;
flex-grow: 1;
background: #edf1f7;
padding: 2em;


`
const Foot = styled.footer`
flex-shrink: 0;
height:25%;
background: #d0dff4;


`


class App extends Component {
  render() {
    return (
      <Outer>
        <Article>
          <Head>
            <Header />
          </Head>
          <Main>
            {routes}
          </Main>
          <Foot>
            <Footer />
          </Foot>
        </Article>


      </Outer>
    );
  }
}

export default App;
