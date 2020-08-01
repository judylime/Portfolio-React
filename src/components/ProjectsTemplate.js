import React, { Component } from 'react'
import {
  Grid,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from 'react-mdl';

export class ProjectsTemplate extends Component {
  render() {
    return (
      <div>
        <Grid>
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
              Node.js and deploy the full stack application to Heroku.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default ProjectsTemplate
