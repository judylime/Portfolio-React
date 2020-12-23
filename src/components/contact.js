import React, { Component } from 'react';
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
  FooterLinkList,
  Textfield
} from 'react-mdl';
import ContactFooter from './ContactFooter';
import ContactForm from './ContactForm';
import './../App.css';

export class Contact extends Component {
  render() {
    return (
      <div className=''>
        <div className='page-content'>
          <Grid>
            <Cell col={6} className='form'>
              <ContactForm />
            </Cell>
            <Cell col={6}>
              <Cell col={9} className='contact-grid'>
                <h2>
                  <a href='/Contact'>Let's Connect</a>
                </h2>{' '}
                <hr />
                <div style={{}}>
                  <div className='lets-connect-i'>
                    <a href='https://github.com/judylime'>
                      <i
                        className='fa fa-github-square social-media '
                        aria-hidden='true'
                      ></i>
                    </a>

                    <a href='https://www.linkedin.com/in/judylian/'>
                      <i
                        className='fa fa-linkedin-square '
                        aria-hidden='true'
                      ></i>
                    </a>
                    <a href='https://twitter.com/judylime'>
                      <i
                        className='fa fa-twitter-square '
                        aria-hidden='true'
                      ></i>
                    </a>
                    <a href='https://www.facebook.com/superjudylime'>
                      <i
                        className='fa fa-facebook-square '
                        aria-hidden='true'
                      ></i>
                    </a>
                    <a
                      href='mailto:judyl05179@gmail.com'
                      title='Email'
                      className=''
                    >
                      <i
                        className='fa fa-envelope-square'
                        aria-hidden='true'
                      ></i>
                    </a>
                    <a href='' title='' className=''>
                      <i class='fas fa-file-pdf' aria-hidden='true'></i>
                    </a>
                  </div>
                </div>
                <div className='contact-list'>
                  {/* <List>
                    <ListItem>
                      <ListItemContent
                        style={{
                          fontSize: '30px',
                          fontFamily: 'Anton',
                          paddingLeft: '0.3rem'
                        }}
                      >
                        <a
                          href='mailto:judyl05179@gmail.com'
                          title='Email'
                          className=''
                        >
                          <i
                            className='fa fa-phone-square'
                            aria-hidden='true'
                          ></i>
                        </a>
                        (669)225-9325
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent
                        style={{ fontSize: '30px', fontFamily: 'Anton' }}
                      >
                        <a
                          href='mailto:judyl05179@gmail.com'
                          title='Email'
                          className=''
                        >
                          <i className='fa fa-envelope' aria-hidden='true'></i>
                        </a>
                        judyl05179@gmail.com
                      </ListItemContent>
                    </ListItem>
                  </List> */}
                </div>
              </Cell>
            </Cell>
          </Grid>
        </div>
        <ContactFooter />
      </div>
    );
  }
}

export default Contact;
