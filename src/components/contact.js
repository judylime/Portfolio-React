import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Judy Lian</h2>
            <img
              src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'
              alt='avatar'
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Courteous and enthusiastic, I am interested in IT and everything
              in its orbit. I began to be fascinated by web programming, e.g.
              developing apps and building websites.
            </p>
          </Cell>
         
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '30px',
                      fontFamily: 'Anton',
                      paddingLeft: '0.6rem'
                    }}
                  >
                    <i className='fa fa-map-marker' aria-hidden='true'></i>{' '}
                    Santa Clara , CA
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '30px',
                      fontFamily: 'Anton',
                      paddingLeft: '0.3rem'
                    }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true'></i>
                    (669)225-9325
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true'></i>
                    judyl05179@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>

            <div className='social-media'>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: '30px',
                    fontFamily: 'Anton'
                  }}
                >
                  Follow me :
                  <i className='fa fa-github-square ' aria-hidden='true'></i>
                  <i className='fa fa-linkedin-square ' aria-hidden='true'></i>
                  <i className='fa fa-twitter-square ' aria-hidden='true'></i>
                  <i className='fa fa-facebook-square ' aria-hidden='true'></i>
                </ListItemContent>
              </ListItem>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
