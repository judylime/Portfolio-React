import React, { Component } from 'react';
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
  FooterLinkList,
  Textfield,Icon
} from 'react-mdl';
import ContactFooter from '../components/ContactFooter';
import ContactForm from '../components/ContactForm';
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
                <br/>
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
                    {/* <a href='https://twitter.com/judylime'>
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
                    </a> */}
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
                    <a href='' title='' className=''>
                      <i class='fas fa-file-download' aria-hidden='true'></i>
                    </a>
                    <Icon name='print' />
                    
                  </div>
                </div>
                <div className='contact-list'></div>
              </Cell>
            </Cell>
            <Cell col={10}></Cell>
            <Cell col={2}>
              <span style={{ background: 'lightgrey', width: '100%' }}>
                Ads<i class='fas fa-ad' size='5'></i>
              </span>
              <a
                target='new'
                href='https://click.linksynergy.com/fs-bin/click?id=SeAcEfxZlI4&offerid=311675.10000124&subid=0&type=4&LSNSUBSITE=LSNSUBSITE'
              >
                <img
                  border='0'
                  alt='Technology Used by Successwful Businesses'
                  src='https://ad.linksynergy.com/fs-bin/show?id=SeAcEfxZlI4&bids=311675.10000124&subid=0&type=4&gridnum=3'
                />
              </a>
            </Cell>
          </Grid>
        </div>
        <ContactFooter />
      </div>
    );
  }
}

export default Contact;
