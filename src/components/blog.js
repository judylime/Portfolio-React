import React, { Component } from 'react';
import { Tab, Tabs, Grid } from 'react-mdl';
import BlogTemplate from './BlogTemplate';


// Simple header with scrollable tabs

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='page-content'>
          <Grid>
            <BlogTemplate
              description='7 Web Developer Interview Questions and Answers'
              URL='https://www.indeed.com/hire/interview-questions/web-developer?aceid=&gclid=Cj0KCQjwyJn5BRDrARIsADZ9ykFxa2SmNgl6dWXeAgjjPsdIJjtvbRsB61FJIMz3pXVTzkf2-iY4J-QaAm3gEALw_wcB'
            />
            <BlogTemplate
              description='Data structure, Algorithm & Objected-oriented Design'
              URL='https://leetcode.com/problems/two-sum/'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='page-content'>
          <Grid>
            <BlogTemplate
              description='Articles, tutorials, snippets, musings, and everything else.'
              URL='https://www.taniarascia.com/blog'
            />
          </Grid>
        </div>
      );
    }
  }
  render() {
    return (
      <div className='blog-grid'>
        {/* <div className='page-title' style={{
          left: '50%',
          display: 'flex',
        }}>
          <h2>BLOG</h2>
          <hr />
        </div> */}
        <div className='page-content'>
          <div className='blog-tabs'>
            <Tabs
              activeTab={this.state.activeTab}
              onChange={(tabId) => this.setState({ activeTab: tabId })}
              ripple
            >
              <Tab>Interview</Tab>
              <Tab>Tutorial</Tab>
            </Tabs>
            <section>
              <div className='content'>{this.toggleCategories()} </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
