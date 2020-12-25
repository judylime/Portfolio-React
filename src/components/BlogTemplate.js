import React, { Component } from 'react';
import {
  Grid,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from 'react-mdl';

export class BlogTemplate extends Component {
  render() {
    return (
      <div>
        <Grid className='blog-grid'>
          <Card
            className='blog-card'
            shadow={4}
            style={{ minwidth: '220px', height: '320px', margin: 'auto' }}
          >
            <CardTitle
              expand
              style={{
                color: '#fff',
                background:
                  // 'url(https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg) center / cover'
                'url(' + this.props.img + ') center / cover'
              }}
            >
              {this.props.blogTitle}
            </CardTitle>
            <CardText>{this.props.description}</CardText>
            <CardActions border>
              <Button colored>
                {' '}
                <a href={this.props.URL}> Learn More</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default BlogTemplate;
