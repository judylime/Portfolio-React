import React, { Component } from 'react';
import { Tab, Tabs, Grid } from 'react-mdl';
import BlogTemplate from './BlogTemplate';
import NotesTemplate from './NotesTemplate';
import InterviewTemplate from './InterviewTemplate';
import TutorialTemplate from './TutorialTemplate';

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
            <TutorialTemplate
              description='React Bootstrap - The most popular front-end framework Rebuilt for React.'
              URL='https://react-bootstrap.netlify.app/'
            />
            <TutorialTemplate
              description='React-MDL is a set of React Components for Material Design Lite, a library of vanilla components maintained by Google.'
              URL='https://tleunen.github.io/react-mdl/components/'
            />
            <TutorialTemplate
              description='Vue is a progressive framework for building user interfaces'
              URL='https://vuejs.org/v2/guide/'
            />
            <TutorialTemplate
              description='Articles, tutorials, snippets, musings, and everything else.'
              URL='https://www.taniarascia.com/blog'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='page-content'>
          <Grid>
            <NotesTemplate
              description='Notes-Quick tips, tricks, and hacks.'
              URL='https://coderguides.com/notes'
            />
            <NotesTemplate
              description='How to fix Page Not Found on netlify'
              URL='https://dev.to/kapi1/how-to-fix-page-not-found-on-netlify-a4i'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='page-content'>
          <Grid>
            <InterviewTemplate
              description='7 Web Developer Interview Questions and Answers'
              URL='https://www.indeed.com/hire/interview-questions/web-developer?aceid=&gclid=Cj0KCQjwyJn5BRDrARIsADZ9ykFxa2SmNgl6dWXeAgjjPsdIJjtvbRsB61FJIMz3pXVTzkf2-iY4J-QaAm3gEALw_wcB'
            />
            <InterviewTemplate
              description='Data structure, Algorithm & Objected-oriented Design'
              URL='https://leetcode.com/problems/two-sum/'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='page-content'>
          <Grid>
            <BlogTemplate
              description='Ark Investment Track'
              URL='https://ark-track.alientomatoinvestment.com/'
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
              <Tab>Tutorials</Tab>
              <Tab>Notes</Tab>
              <Tab>Interview</Tab>
              <Tab>Others</Tab>
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
