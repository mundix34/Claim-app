import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';

const Outer = styled.div`
text-align: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;



`
const Article = styled.article`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
padding: 1em;
margin: 0;
  padding: 0;



`
const Head = styled.header`
flex-shrink: 0;
backgound: #ebeef4;



`
const Main = styled.main`
justify-content: flex-start;
flex-grow: 1;
background: #ebeef4;


`
const Foot = styled.footer`
flex-shrink: 0;
background: #d2d7e0;
overflow: hidden;
height: 250px;

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
            <Sidebar/>
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
