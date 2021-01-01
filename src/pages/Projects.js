import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectsTemplate from '../components/ProjectsTemplate';

import DevConnector from '../image/DevConnector.jpg';
import Movie from '../image/Movie.jpg';
import Restaurant from '../image/Restaurant.jpg';
import GoogleClone from '../image/GoogleClone.jpg';
import HappyBday from '../image/HappyBday.jpg';
import PhotoEditor from '../image/PhotoEditor.jpg';
import ToDoList from '../image/ToDoList.jpg';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='page-content'>
          <Grid container spacing={0} justify='center' alignItems='center' align="center">
            <ProjectsTemplate
              img={DevConnector}
              projects='DevCommunity'
              description='Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku.'
              GithubURL='https://github.com/judylime/DevConnector-MERN_Stack'
              DemoURL='https://calm-tor-62311.herokuapp.com/'
            />
            <ProjectsTemplate
              img={Movie}
              projects='Movie'
              description='Build a modern and beautiful looking Movie Application with React Hooks, free APIs, and Bootstrap and deploy to Netlify.'
              GithubURL='https://github.com/judylime/Movie_App-React_Hooks_APIs'
              DemoURL='https://judy-movie.netlify.app/'
            />
            <ProjectsTemplate
              img={ToDoList}
              projects='ToDoList'
              description='Build a useful to-do list website application with react, Bootstrap and tested with free API and deploy on Codesandbox.'
              GithubURL='https://github.com/judylime/GoogleClone-react'
              DemoURL='https://zt4fg.csb.app/'
            />
            <ProjectsTemplate
              img={GoogleClone}
              projects='GoogleClone'
              description='Build a Google Search Clone application with react and free Dad Jokes API and deploy on Codesandbox.'
              GithubURL='https://github.com/judylime/GoogleClone-react'
              DemoURL='https://ubxx2.csb.app/'
            />
            <ProjectsTemplate
              img={Restaurant}
              projects='Restaurant'
              description='Build a modern and beautiful looking Restaurant Website with Bootstrap and host to GitHub Pages.'
              GithubURL='https://github.com/judylime/Restaurant_bullseye-bootstrap'
              DemoURL='https://judylime.github.io/Restaurant_bullseye-bootstrap/'
            />
            <ProjectsTemplate
              img={HappyBday}
              projects='HappyBday'
              description='Build a  modern and beautiful looking Happy Bday Card Website  with JavaScript and HTML/CSS.'
              GithubURL='https://github.com/judylime/HappyBday'
              DemoURL='https://judylime.github.io/HappyBday/'
            />
            <ProjectsTemplate
              img={PhotoEditor}
              projects='PhotoEditor'
              description='Build a convenient and useful Photo Editer Application with pure JavaScript and HTML/CSS.'
              GithubURL='https://github.com/judylime/Photo-Editor'
              DemoURL='https://judylime.github.io/Photo-Editor/'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate
              img={DevConnector}
              projects='DevCommunity'
              description='Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku.'
              GithubURL='https://github.com/judylime/DevConnector-MERN_Stack'
              DemoURL='https://calm-tor-62311.herokuapp.com/'
            />
            <ProjectsTemplate
              img={Movie}
              projects='Movie'
              description='Build a modern and beautiful looking Movie Application with React Hooks, free APIs, and Bootstrap and deploy to Netlify.'
              GithubURL='https://github.com/judylime/Movie_App-React_Hooks_APIs'
              DemoURL='https://judy-movie.netlify.app/'
            />
            <ProjectsTemplate
              img={Restaurant}
              projects='Restaurant'
              description='Build a modern and beautiful looking Restaurant Website with Bootstrap and host to GitHub Pages.'
              GithubURL='https://github.com/judylime/Restaurant_bullseye-bootstrap'
              DemoURL='https://judylime.github.io/Restaurant_bullseye-bootstrap/'
            />
            <ProjectsTemplate
              img={ToDoList}
              projects='ToDoList'
              description='Build a useful to-do list website application with react, Bootstrap and tested with testd with free API and deploy on Heroku.'
              GithubURL='https://github.com/judylime/GoogleClone-react'
              DemoURL='https://zt4fg.csb.app/'
            />
            <ProjectsTemplate
              img={GoogleClone}
              projects='GoogleClone'
              description='Build a Google Search Clone application with react and free Dad Jokes API and deploy on Codesandbox.'
              GithubURL='https://github.com/judylime/GoogleClone-react'
              DemoURL='https://ubxx2.csb.app/'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate
              img={DevConnector}
              projects='DevCommunity'
              description='Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku.'
              GithubURL='https://github.com/judylime/DevConnector-MERN_Stack'
              DemoURL='https://calm-tor-62311.herokuapp.com/'
            />
            <ProjectsTemplate
              img={Movie}
              projects='Movie'
              description='Build a modern and beautiful looking Movie Application with React Hooks, free APIs, and Bootstrap and deploy to Netlify.'
              GithubURL='https://github.com/judylime/Movie_App-React_Hooks_APIs'
              DemoURL='https://judy-movie.netlify.app/'
            />
            <ProjectsTemplate
              img={ToDoList}
              projects='ToDoList'
              description='Build a useful to-do list website application with react, Bootstrap and tested with testd with free API and deploy on Heroku.'
              GithubURL='https://github.com/judylime/GoogleClone-react'
              DemoURL='https://zt4fg.csb.app/'
            />
            <ProjectsTemplate
              img={GoogleClone}
              projects='GoogleClone'
              description='Build a Google Search Clone application with react and free Dad Jokes API and deploy on Codesandbox.'
              GithubURL='https://github.com/judylime/GoogleClone-react'
              DemoURL='https://ubxx2.csb.app/'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate
              img={DevConnector}
              projects='DevCommunity'
              description='Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku.'
              GithubURL='https://github.com/judylime/DevConnector-MERN_Stack'
              DemoURL='https://calm-tor-62311.herokuapp.com/'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate
              img={DevConnector}
              projects='DevCommunity'
              description='Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku.'
              GithubURL='https://github.com/judylime/DevConnector-MERN_Stack'
              DemoURL='https://calm-tor-62311.herokuapp.com/'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate
              img={Movie}
              projects='Movie'
              description='Build a modern and beautiful looking Movie Application with React Hooks, free APIs, and Bootstrap and deploy to Netlify.'
              GithubURL='https://github.com/judylime/Movie_App-React_Hooks_APIs'
              DemoURL='https://judy-movie.netlify.app/'
            />

            <ProjectsTemplate
              img={GoogleClone}
              projects='GoogleClone'
              description='Build a Google Search Clone application with react and free Dad Jokes API and deploy on Codesandbox.'
              GithubURL='https://github.com/judylime/GoogleClone-react'
              DemoURL='https://ubxx2.csb.app/'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 6) {
      return (
        <div className='page-content'>
          <Grid>
            <ProjectsTemplate
              img={HappyBday}
              projects='HappyBday'
              description='Build a  modern and beautiful looking Happy Bday Card Website  with JavaScript and HTML/CSS.'
              GithubURL='https://github.com/judylime/HappyBday'
              DemoURL='https://judylime.github.io/HappyBday/'
            />
            <ProjectsTemplate
              img={PhotoEditor}
              projects='PhotoEditor'
              description='Build a convenient and useful Photo Editer Application with pure JavaScript and HTML/CSS.'
              GithubURL='https://github.com/judylime/Photo-Editor'
              DemoURL='https://judylime.github.io/Photo-Editor/'
            />
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='projects-grid'>
        {/* <div
          className='page-title'
          style={{
            left: '50%',
            display: 'flex'
          }}
        >
          <h2>PROJECTS</h2>
          <hr />
          <br />
        </div> */}

        <div className='category-tabs'>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>All</Tab>
            <Tab>Bootstrap</Tab>
            <Tab>React</Tab>
            <Tab>MongoDB</Tab>
            <Tab>Node</Tab>
            <Tab>API</Tab>
            <Tab>JavaScript</Tab>
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
