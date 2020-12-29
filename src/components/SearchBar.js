import React from 'react';
import { Header, HeaderRow, Navigation, Drawer, Textfield, Badge, Icon, Button } from 'react-mdl';

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
            {/* Icon badge on icon */}
            {/* <Badge text='♥' overlap>
              <Icon name='account_box' />
            </Badge> */}
          </Navigation>
          {/* Raised button with ripple */}
          <Button
            style={{ textDecoration: 'none', color: 'white', shadow: '0' , margin:'1em'}}
            raised
            ripple
          >
            Log in
          </Button>

          <Button
            style={{ textDecoration: 'none', color: 'white', shadow: '0' }}
            raised
            ripple
          >
            Sign up
          </Button>
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
