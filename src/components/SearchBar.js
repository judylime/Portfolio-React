import React from 'react';
import { Header, HeaderRow, Navigation, Drawer, Textfield } from 'react-mdl';

import { Link } from 'react-router-dom';
import '../App.css';
function SearchBar() {
  return (
    <>
      <Header className='header-color' waterfall hideTop>
        <HeaderRow
          title={
            <Link
              style={{ textDecoration: 'none', color: 'white', shadow: '0' }}
              to='/'
            >
              Home
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to='/About'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
          {/* Search */}
          <Textfield
            placeholder='Search...'
            className='search'
            value=''
            onChange={() => {}}
            label='Search3'
            expandable
            expandableIcon='search'
          />
        </HeaderRow>
      </Header>
      <Drawer
        title={
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            My Portfolio
          </Link>
        }
      >
        <Navigation>
          <Link to='/About'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
        </Navigation>
      </Drawer>
    </>
  );
}

export default SearchBar;
