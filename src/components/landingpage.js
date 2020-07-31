import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

export class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'
              alt='avatar'
              className='avatar-img'
            />
            <div className=' banner-text'>
              <h2>Full Stack Web Developer</h2>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | MongoDB | Express | React |
                NodeJS
              </p>
              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/judylian/'
                  rel='nooperner noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                </a>
                {/* Github */}
                <a
                  href='https://github.com/judylime'
                  rel='nooperner noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true'></i>
                </a>
                {/* Freecodecamp */}
                <a
                  href='https://www.freecodecamp.org/judylime'
                  rel='nooperner noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-free-code-camp' aria-hidden='true'></i>
                </a>
                {/* Youtube */}
                <a
                  href='https://www.youtube.com/channel/UCCIWB4LVMnQCLgBr9QUpbvw/featured?view_as=subscriber'
                  rel='nooperner noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-youtube-square' aria-hidden='true'></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage
