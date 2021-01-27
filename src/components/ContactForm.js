import React, { Component } from 'react';
import { Button, Textfield } from 'react-mdl';
import ContactFooter from './ContactFooter';

export class Contact extends Component {
  render() {
    return (
      <div className=''>
        <form className='page-content' action='POST' data-netlify='true'>
          <div
            className='contact-form'
            type={{ left: 0, margin: 0, textAlign: 'left' }}
          >
            <h4>Have a question?</h4>
            {/* Textfield with floating label */}
            <Textfield
              className='form'
              type='text'
              name='name'
              id='name'
              // placeholder='Name'
              onChange={() => {}}
              label='Name'
              floatingLabel
              style={{ width: '400px' }}
            />
            <br />

            <Textfield
              className='form'
              type='email'
              name='email'
              id='email'
              // placeholder='Email'
              onChange={() => {}}
              label='Email'
              floatingLabel
              style={{ width: '400px' }}
            />
            <br />
            {/* Floating Multiline Textfield */}
            <Textfield
              className='form'
              type='text'
              name='message'
              id='message'
              placeholder='Message'
              onChange={() => {}}
              label='Text lines...'
              rows={1}
              style={{ width: '400px' }}
            />
            <br />
            <input
              className='form'
              type='file'
              name='file'
              id='file'
              placeholder='Upload File'
              rows={1}
              style={{ width: '400px' }}
            />
            <br />
            <div data-netlify-recaptcha='true'></div>
            <br />
            <Button raised accent ripple Type={{}}>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
