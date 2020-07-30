import React from 'react';
import {
  Layout,
  Header,
  HeaderRow,
  Textfield,
  Navigation,
  Drawer,
  Content
} from 'react-mdl';
import Main from './components/Main'
import { Link } from 'react-router-dom'

import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    /* Hide the top part of the header when scrolling down */
    <div className='demo-big-content'>
      <Layout>
        <Header className='header-color' waterfall hideTop>
          <HeaderRow title='Title'>
            <Navigation>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/blog'>Blog</Link>
              <Link to='/contact'>Contact</Link>
            </Navigation>
            <Textfield
              value=''
              onChange={() => {}}
              label='Search3'
              expandable
              expandableIcon='search'
            />
          </HeaderRow>
        </Header>
        <Drawer title='Title'>
          <Navigation>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
