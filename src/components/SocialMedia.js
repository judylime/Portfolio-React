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

export class SocialMedia extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <a href='#'>
                <i class='fab fa-facebook-f'></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i class='fab fa-twitter'></i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i class='fab fa-instagram'></i>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i class='fab fa-linkedin-in'></i>
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i class='fab fa-github'></i>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i class='fab fa-youtube'></i>
                <span>Youtube</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default SocialMedia;
