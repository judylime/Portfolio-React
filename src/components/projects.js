import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>

          // Project 1
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'
              }}
            >
              DevConnector
            </CardTitle>
            <CardText>
              Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku. MEAN
              stack cut latency by 40% and increased effectiveness of database
              administrators by 20%.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          
          // Project 2
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'
              }}
            >
              DevConnector
            </CardTitle>
            <CardText>
              Build a social network with MongoDB , Express, React, Redux &
              Node.js and deploy the full stack application to Heroku. MEAN
              stack cut latency by 40% and increased effectiveness of database
              administrators by 20%.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Strip</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Strip</Tab>
        </Tabs>

        <Grid >
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()} </div>
          </Cell>
        </Grid>
        {this.toggleCategories()}
      </div>
    );
  }
}

export default Projects;
