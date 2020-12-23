import React from 'react';
import {
  Layout,
  Header,
  HeaderRow,
  Navigation,
  Drawer,
  Content
} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    /* Hide the top part of the header when scrolling down */
    <div className='demo-big-content'>
      <Layout>
        <SearchBar />
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
