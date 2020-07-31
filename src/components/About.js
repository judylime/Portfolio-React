import React, { Component } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'
                alt='avatar'
                style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Judy Lian</h2>
            <h4 style={{ color: 'grey' }}>Web Developer</h4>
            <hr style={{ borderTop: ' 3px solid #833fb2', width: '50%' }} />
            <p>
              Courteous and enthusiastic, I am interested in IT and everything
              in its orbit. I began to be fascinated by web programming, e.g.
              developing apps and building websites.
            </p>
            <hr style={{ borderTop: ' 3px solid #833fb2', width: '50%' }} />
            <h5>
              Follow Me:
              <i className='fa fa-github-square ' aria-hidden='true'></i>
              <i className='fa fa-linkedin-square ' aria-hidden='true'></i>
              <i className='fa fa-twitter-square ' aria-hidden='true'></i>
              <i className='fa fa-facebook-square ' aria-hidden='true'></i>
            </h5>
          </Cell>
          <Cell col={6} className='about-right-col'>
            <h2>Skills</h2>
            <br />
            {/* Progress Bar with Buffering */}
            <div className='progress-bar'>
              <h5>Front-end: </h5>
              <p>
                JavaScript / ES6 / jQuery / Pug / React / Redux / HTML / CSS /
                Bootstrap
              </p>
              <ProgressBar progress={80} buffer={87} />
              <h5>Back-end: </h5>
              <p>Node / MongoDB / Mongoose / Express / APIs / AJAX / JSON</p>
              <ProgressBar progress={75} buffer={87}  />
              <h5>UI/UX Design & PM :</h5>
              <p>Photoshop / Canvas / Invision / Figma</p>
              <ProgressBar progress={65} buffer={87} />
              <h5>Other :</h5>
              <p>Git / Github / NPM </p>
              <ProgressBar progress={70} buffer={87} />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About
