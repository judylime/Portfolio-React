import React, { Component } from 'react';
import {
  Grid,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from 'react-mdl';

export class InterviewTemplate extends Component {
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
                  'url(https://cdn.seeklearning.com.au/media/images/career-guide/article/career-advice/web_images/blogs/214/3725/how_to_prepare_for_a_video_interview_like_a_pro_940x485.jpg) center / cover'
                // 'url(' + this.props.img + ') center / cover'
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

export default InterviewTemplate;
