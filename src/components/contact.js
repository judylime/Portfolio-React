import React, { Component } from 'react';
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
  Button,
  Textfield
} from 'react-mdl';
import ContactFooter from './ContactFooter';

export class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        {/* <div
          className='page-title'
          style={{
            left: '50%',
            display: 'flex'
          }}
        >
          <h2>CONTACT</h2>
          <hr />
          <br />
        </div> */}
        <div className='page-content'>
          <Grid>
            <Cell col={7}>
              <Cell col={4}></Cell>
              <Cell col={8} className='form'>
                <div
                  className='contact-form'
                  type={{ left: 0, margin: 0, textAlign: 'left' }}
                >
                  <p>Have a question?</p>
                  {/* Textfield with floating label */}
                  <Textfield
                    onChange={() => {}}
                    label='Name...'
                    floatingLabel
                    style={{ width: '400px' }}
                  />
                  <br />
                  <Textfield
                    onChange={() => {}}
                    label='Email...'
                    floatingLabel
                    style={{ width: '400px' }}
                  />
                  <br />
                  {/* Floating Multiline Textfield */}
                  <Textfield
                    onChange={() => {}}
                    label='Text lines...'
                    rows={3}
                    style={{ width: '400px' }}
                  />
                  <br />
                  <Button raised accent ripple Type={{}}>
                    Submit
                  </Button>
                </div>
              </Cell>
            </Cell>
            <Cell col={5}>
              <Cell col={9} className='contact-grid'>
                <h2>Contact Me</h2>
                <hr />
                <div className='contact-list'>
                  <List>
                    <ListItem>
                      <ListItemContent
                        style={{
                          fontSize: '30px',
                          fontFamily: 'Anton',
                          paddingLeft: '0.3rem'
                        }}
                      ><a
                          href='mailto:judyl05179@gmail.com'
                          title='Email'
                          className=''
                        >
                        <i
                          className='fa fa-phone-square'
                          aria-hidden='true'
                        ></i></a>
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
                  </List>
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
