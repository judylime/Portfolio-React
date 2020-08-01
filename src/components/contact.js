import React, { Component } from 'react';
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
  Button,
  FooterDropDownSection,
  Footer,
  FooterLinkList,
  FooterSection,
  Textfield
} from 'react-mdl';

export class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <div
          className='page-title'
          style={{
            left: '50%',
            display: 'flex'
          }}
        >
          <h2>CONTACT</h2>
          <hr />
          <br />
        </div>
        <div className='page-content'>
          <Grid>
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
                  style={{ width: '600px' }}
                />
                <br />
                <Textfield
                  onChange={() => { }}
                  label='Email...'
                  floatingLabel
                  style={{ width: '400px' }}
                />
                <br />
                {/* Floating Multiline Textfield */}
                <Textfield
                  onChange={() => {}}
                  label='Text lines...'
                  rows={5}
                  style={{ width: '400px' }}
                />
                <br />
                <Button raised accent ripple Type={{}}>
                  Submit
                </Button>
              </div>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={12} className='contact-grid'>
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
                   
                    <i className='fa fa-github-square ' aria-hidden='true'></i>
                    <i
                      className='fa fa-linkedin-square '
                      aria-hidden='true'
                    ></i>
                    <i className='fa fa-twitter-square ' aria-hidden='true'></i>
                    <i
                      className='fa fa-facebook-square '
                      aria-hidden='true'
                    ></i>
                  </ListItemContent>
                </ListItem>
              </div>
            </Cell>
          </Grid>
        </div>
        <div className="footer" type={{ Bottom: 0 }}>
        <Footer size="mini" >
          <FooterSection type="left" logo="Title">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
            <p type={{ textAlign: 'center', left: '50%' }}>Judy Lian ©2020</p>

          </FooterSection>
        </Footer>
        </div>
      </div>
    );
  }
}

export default Contact;
