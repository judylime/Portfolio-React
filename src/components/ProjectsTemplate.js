import React, { Component } from 'react';
import {
  Grid,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
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
                  /*
                'url(http://www.getmdl.io/assets/demos/welcome_card.jpgthis.props.img) center /cover'
                */
                  'url(' + this.props.img + ') center / cover'
              }}
            >
              {this.props.projects}
            </CardTitle>
            <CardText>{this.props.description}</CardText>
            <CardActions border>
              <Button colored>
                <a href={this.props.GithubURL}>GitHub</a>
              </Button>
              <Button colored>
                <a href={this.props.DemoURL}>Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              {/* <IconButton name='share' /> */}
            </CardMenu>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default ProjectsTemplate;
