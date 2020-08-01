import React, { Component } from 'react'
import { Grid, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'

export class BlogTemplate extends Component {
  render() {
    return (
      <div>
        <Grid className='blog-grid'>
          <Card
            className='blog-card'
            shadow={0}
            style={{ width: '220px', height: '320px', margin: 'auto' }}
          >
            <CardTitle
              expand
              style={{
                color: '#fff',
                background:
                  'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
              }}
            >
              Update
              </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
              convallis.
              </CardText>
            <CardActions border>
              <Button colored>View Updates</Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    )
  }
}

export default BlogTemplate
