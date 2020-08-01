import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectsTemplate from './ProjectsTemplate';

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
            <ProjectsTemplate />
            <ProjectsTemplate />
            <ProjectsTemplate />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='page-content'>
          <Grid >
            <ProjectsTemplate />
            <ProjectsTemplate />
            <ProjectsTemplate />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='page-content'>
          <Grid >
            <ProjectsTemplate />
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
