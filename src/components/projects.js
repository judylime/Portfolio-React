import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectsTemplate from './ProjectsTemplate';

import DevConnector from '../image/DevConnector.jpg';
import Movie from '../image/Movie.jpg';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate
              className='MongoDB Express React Node'
              img={DevConnector}
              projects='DevConnector'
              description='Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku.'
              GithubURL='https://github.com/judylime/DevConnector-MERN_Stack'
              DemoURL='https://calm-tor-62311.herokuapp.com/'
            />
            <ProjectsTemplate
              className=' React'
              img={Movie}
              projects='Movie'
              description='Build a modern and beautiful looking Movie Application with React Hooks, free APIs, and Bootstrap and deploy to Netlify'
              GithubURL='https://github.com/judylime/Movie_App-React_Hooks_APIs'
              DemoURL='https://judy-movie.netlify.app/'
            />
            <ProjectsTemplate />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate />
            <ProjectsTemplate />
            <ProjectsTemplate />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate
              projects='DevConnecter'
              description='Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku.'
              GithubURL='http://findmatthew.com/'
              DemoURL='http://findmatthew.com/'
            />
            <ProjectsTemplate />
            <ProjectsTemplate />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate />
            <ProjectsTemplate />
            <ProjectsTemplate />
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='projects-grid'>
        <div
          className='page-title'
          style={{
            left: '50%',
            display: 'flex'
          }}
        >
          <h2>PROJECTS</h2>
          <hr />
          <br />
        </div>

        <div className='category-tabs'>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>All</Tab>
            <Tab>JavaScript</Tab>
            <Tab>React</Tab>
            <Tab>MongoDB</Tab>
          </Tabs>

          <Grid>
            <Cell col={12}>
              <div className='content'>{this.toggleCategories()} </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
