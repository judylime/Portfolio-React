import React, { Component } from 'react';
import {
  FooterDropDownSection,
  Footer,
  FooterLinkList,
  FooterSection
} from 'react-mdl';
export class ContactFooter extends Component {
  render() {
    return (
      <div className='footer'>
        <Footer size='mega'>
          <FooterSection type='middle'>
            <FooterDropDownSection title='Portfolio'>
              <FooterLinkList>
                <a href='/about'>About</a>
                <a href='/projects'>Projects</a>
                <a href='/blog'>Blog</a>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title='Developer'>
              <FooterLinkList>
                <a href='https://calm-tor-62311.herokuapp.com/'>Community</a>
                <a href='#'>Tools</a>
                <a href='#'>Webs</a>
              </FooterLinkList>
            </FooterDropDownSection>

            <FooterDropDownSection title='Support'>
              <FooterLinkList>
                <a href='#'>Contact Us</a>
                <a href='#'>
                  <div className='social-media'>
                    <i
                      className='fa fa-github-square social-media '
                      aria-hidden='true'
                    ></i>
                    <i
                      className='fa fa-linkedin-square '
                      aria-hidden='true'
                    ></i>
                    <i className='fa fa-twitter-square ' aria-hidden='true'></i>
                    <i
                      className='fa fa-facebook-square '
                      aria-hidden='true'
                    ></i>
                  </div>
                </a>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title='Resources'>
              <FooterLinkList>
                <a href='#'>Help</a>
                <a href='#'>Privacy & Terms</a>
                <p>©2020 All rights reserved | Designed by Judy Lian</p>
              </FooterLinkList>
            </FooterDropDownSection>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default ContactFooter;
