import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import './Reset.css';

const Outer = styled.div`
text-align: center;
  height: 170vh;
  width: 100%;
  margin: 0;
  padding: 0;
  @media(min-width: 593px){
    height: 130vh;
    }



`
const Article = styled.article`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
padding: 1em;
margin: 0;
padding: 0;
background-position: center;
background-size: cover;




`
const Head = styled.header`
flex-shrink: 0;
backgound: red;
height: 7.5%;
width: 100%;
z-index: 5;
margin-bottom: 0;
padding-bottom: 2em;
@media(min-width: 593px){
  height: 13.8%;
  padding: 0.2rem;
  }






`
const Main = styled.main`
justify-content: space-between;
flex-grow: 1;
background: #ebeef4;
margin: 0;
display: flex;
height: 63%;
width: 100%;
@media(min-width: 593px){
  height: 61%;
  }



`
const Foot = styled.footer`
flex-shrink: 0;
background: #d2d7e0;
overflow: hidden;
height: 25%;
width: 100%;
z-index: 5;


`


class App extends Component {
  render() {
    return (
      <Outer>
        <Article>
          <Head>
            <Header />
          </Head>
          <Main className="main-wrapper">
            <div className="side-bar">
              <Sidebar />
            </div>
            <div className="routes">
              {routes}
            </div>
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
