import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import AboutSkills from './AboutSkills';

class About extends Component {
  render() {
    return (
      <div
        className='about-grid'
        dataAnimation='slide-in-left'
        dataDelay='.5s'
        style={{ animationDelay: '0.5s' }}
      >
        {/* <div
          className='page-title'
          style={{
            left: '50%',
            display: 'flex'
          }}
        >
          <h2>ABOUT</h2>
          <hr />
          <br />
        </div> */}
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
                <h4 style={{ color: 'grey' }}>Frontend Web Developer</h4>
                <hr />
                <p style={{ margin: 'auto', paddingTop: '1em', width: '85%' }}>
                  Courteous and enthusiastic, I am interested in IT and
                  everything in its orbit. I began to be fascinated by web
                  programming, e.g. developing apps and building websites.
                  <br />
                  I'm a Front-End Developer in Santa Clara, CA. I have serious
                  passion for UI effects, animations and creating intuitive,
                  dynamic user experiences.
                </p>
              </div>
            </Cell>
            <Cell col={6} className='about-right-col'>
              <h3>Skills & Tools</h3>
              <hr />
              {/* Progress Bar with Buffering */}
              <div
                className='progress-bar mdl-grid--no-spacing'
                style={{ margin: '0', padding: '0' }}
              >
                <Grid>
                  <Cell col={2}>
                    <p>Front-end</p>
                  </Cell>
                  <Cell col={10}>
                    <AboutSkills skill='HTML/CSS' progress={88} />
                    <AboutSkills skill='Bootstrap' progress={86} />
                    <AboutSkills skill='JavaScript/ES6' progress={82} />
                    <AboutSkills skill='jQuery' progress={80} />
                    <AboutSkills skill='React' progress={76} />
                    <AboutSkills skill='Redux' progress={70} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={2}>
                    <p> Back-end </p>
                  </Cell>
                  <Cell col={10}>
                    <AboutSkills skill='MongoDB' progress={85} />
                    <AboutSkills skill='NodeJS' progress={75} />
                    <AboutSkills skill='Mongoose' progress={70} />
                    <AboutSkills skill='Express' progress={70} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={2}>
                    <p>UI/UX</p>
                  </Cell>
                  <Cell col={10}>
                    <AboutSkills skill='Photoshop' progress={78} />
                    <AboutSkills skill='Figma' progress={70} />
                    <AboutSkills skill='Invision' progress={70} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={2}>
                    <p>Testing</p>
                  </Cell>
                  <Cell col={10}>
                    <AboutSkills skill='Chrome DevTools' progress={80} />
                    <AboutSkills skill='Jest' progress={80} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={2}>
                    <p>Managment</p>
                  </Cell>
                  <Cell col={10}>
                    <AboutSkills skill='Jira' progress={80} />
                    <AboutSkills skill='Trello' progress={80} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={2}>
                    <p>Other</p>
                  </Cell>
                  <Cell col={10}>
                    <AboutSkills skill='Git' progress={88} />
                    <AboutSkills skill='Github' progress={88} />
                    <AboutSkills skill='Gitlab' progress={88} />
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
