import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import Skills from './Skills';


class About extends Component {
  render() {
    return (
      <div
        className='about-grid'
        dataAnimation='slide-in-left'
        dataDelay='.5s'
        style={{ animationDelay: '0.5s' }}
      >
        <div className='page-title' style={{
          left: '50%', 
          display: 'flex',
        }} >
          <h2>ABOUT</h2>
          <hr />
          <br />
        </div>
        <div className='page-content'>
          <Grid>
            <Cell col={6}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'
                  alt='avatar'
                  style={{ height: '200px', padding: '2em' }}
                />
                <h2 style={{ paddingTop: '1em' }}>Judy Lian</h2>
                <h4 style={{ color: 'grey' }}>Web Developer</h4>
                <p style={{ margin: 'auto', paddingTop: '1em', width: '75%' }}>
                  Courteous and enthusiastic, I am interested in IT and
                  everything in its orbit. I began to be fascinated by web
                  programming, e.g. developing apps and building websites.
                  <br />
                  I'm a Front-End Developer for Lingolet in Santa Clara, CA. I
                  have serious passion for UI effects, animations and creating
                  intuitive, dynamic user experiences.
                </p>
                <h5 className='follow-me'>
                  Follow me:
                  <i className='fa fa-github-square ' aria-hidden='true'></i>
                  <i className='fa fa-linkedin-square ' aria-hidden='true'></i>
                  <i className='fa fa-twitter-square ' aria-hidden='true'></i>
                  <i className='fa fa-facebook-square ' aria-hidden='true'></i>
                </h5>
              </div>
            </Cell>
            <Cell col={6} className='about-right-col'>
              <h3>Skills</h3>
              <hr />
              {/* Progress Bar with Buffering */}
              <div
                className='progress-bar mdl-grid--no-spacing'
                style={{ margin: '0', padding: '0' }}
              >
                <Grid>
                  <Cell col={3}>
                    <p>Front-end:</p>
                  </Cell>
                  <Cell col={9}>
                    <Skills skill='HTML/CSS' progress={88} />
                    <Skills skill='Bootstrap' progress={86} />
                    <Skills skill='JavaScript/ES6' progress={82} />
                    <Skills skill='jQuery' progress={80} />
                    <Skills skill='React' progress={76} />
                    <Skills skill='Redux' progress={70} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={3}>
                    <p> Back-end:</p>
                  </Cell>
                  <Cell col={9}>
                    <Skills skill='MongoDB' progress={85} />
                    <Skills skill='NodeJS' progress={75} />
                    <Skills skill='Mongoose' progress={70} />
                    <Skills skill='Express' progress={70} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={3}>
                    <p>UI/UX:</p>
                  </Cell>
                  <Cell col={9}>
                    <Skills skill='Photoshop' progress={78} />
                    <Skills skill='Invision/Figma' progress={70} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={3}>
                    <p>Other:</p>
                  </Cell>
                  <Cell col={9}>
                    <Skills skill='Git/Github' progress={80} />
                  </Cell>
                </Grid>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;
