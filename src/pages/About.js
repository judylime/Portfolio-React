import React, { Component } from 'react';
import { Grid, Cell ,Button} from 'react-mdl';
import AboutSkills from '../components/AboutSkills';

class About extends Component {
  render() {
    return (
      <div
        className='about-grid'
        dataAnimation='slide-in-left'
        dataDelay='.5s'
        style={{ animationDelay: '0.5s' }}
      >
   
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
                <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
                <h6 style={{ color: 'grey' }}>Santa Clara, CA 95051 ｜US Citizen</h6>
                <hr />
                <p style={{ margin: 'auto', paddingTop: '1em', width: '85%' }}>
                  Courteous and enthusiastic, I am interested in IT and
                  everything in its orbit. I began to be fascinated by web
                  programming, e.g. developing apps and building websites.
                  <br />
                  Has a wide range of project experience, including web application development, building infrastructure, and frameworks.

                </p>
              </div>
              <br/>
              <Button raised colored href='./image/Resume_Judy.pdf' rel='noopener npreferrer' target='_blank' animationDelay >
                View My Resume
              </Button>
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
                    
                    <AboutSkills skill='JavaScript/ES6' progress={82} />
                    <AboutSkills skill='React' progress={86} />
                    <AboutSkills skill='Bootstrap' progress={86} />
                    <AboutSkills skill='HTML/CSS' progress={88} />
                    <AboutSkills skill='jQuery' progress={80} />
                    <AboutSkills skill='Redux' progress={70} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={2}>
                    <p> Back-end </p>
                  </Cell>
                  <Cell col={10}>
                    <AboutSkills skill='Java' progress={85} />
                    <AboutSkills skill='SQL' progress={85} />
                    <AboutSkills skill='NodeJS' progress={75} />
                    <AboutSkills skill='MongoDB' progress={75} />
                    <AboutSkills skill='Spring' progress={75} />
                    <AboutSkills skill='Spring Boot' progress={75} />
                    <AboutSkills skill='Hibernate' progress={75} />
                    <AboutSkills skill='TomCat' progress={75} />
                    <AboutSkills skill='Python' progress={70} />
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
                    <AboutSkills skill='Unit Testing' progress={80} />
                    <AboutSkills skill='Chrome DevTools' progress={80} />
                    <AboutSkills skill='Jest' progress={70} />
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
