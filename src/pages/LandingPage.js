import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';

export class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', top: '50%' }}>
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
                Java | JavaScript | SQL | NodeJS | HTML | CSS | React | Spring | Hibernate | Spring Boot
                
              </p>
              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/judylian/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>
                {/* Github */}
                <a
                  href='https://github.com/judylime'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github' aria-hidden='true'></i>
                </a>{' '}
                {/* Freecodecamp */}
                <a
                  href='https://www.freecodecamp.org/judylime'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-free-code-camp' aria-hidden='true'></i>
                </a>
                {/* Gitlab */}
                <a
                  href='https://gitlab.com/JudyL'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-gitlab' aria-hidden='true'></i>
                </a>
                
                {/* PortfolioSite */}
                <a
                  href='https://judylime.github.io/Portfolio-JS/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-globe' aria-hidden='true'></i>
                </a>
                {/* Stackoverflow */}
                {/* <a
                  href='https://stackoverflow.com/users/13543305/judylime'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fab fa-stackoverflow' aria-hidden='true'></i>
                </a>
                <i class=''></i> */}
              </div>
            </div>
            <br />
            <br />
            <Button raised colored href='/projects'>
              View My Work
            </Button>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
