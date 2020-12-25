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
              description='Welcome to AWS Fundamentals: Going Cloud-Native'
              URL='https://www.coursera.org/learn/aws-fundamentals-going-cloud-native/home/welcome'
              img='https://miro.medium.com/max/700/1*b_al7C5p26tbZG4sy-CWqw.png'
            />
            <TutorialTemplate
              description='React Bootstrap - The most popular front-end framework Rebuilt for React.'
              URL='https://react-bootstrap.netlify.app/'
              img='https://www.educative.io/api/page/5816757605367808/image/download/6486746733740032'
            />
            <TutorialTemplate
              description='React-MDL : for Material Design Lite, a library of vanilla components maintained by Google.'
              URL='https://tleunen.github.io/react-mdl/components/'
              img='https://reactscript.com/wp-content/uploads/2016/04/React-MDL.png'
            />
            <TutorialTemplate
              description='Vue is a progressive framework for building user interfaces'
              URL='https://vuejs.org/v2/guide/'
              img='https://miro.medium.com/max/1000/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg'
            />
            
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='page-content'>
          <Grid>
            <NotesTemplate
              description='Cool little JavaScript Operator Lookup'
              URL='https://joshwcomeau.com/operator-lookup/'
              img='https://www.joshwcomeau.com/operator-lookup/'
            />
            <NotesTemplate
              description='Notes-Quick tips, tricks, and hacks.'
              URL='https://coderguides.com/notes'
            />
            <NotesTemplate
              description='How to fix Page Not Found on netlify'
              URL='https://dev.to/kapi1/how-to-fix-page-not-found-on-netlify-a4i'
            />
            <NotesTemplate
              description='Simple Contact Form Submission With Netlify'
              URL='https://www.youtube.com/watch?v=6ElQ689HRcY'
            />
            <NotesTemplate
              description='Articles, tutorials, snippets'
              URL='https://www.taniarascia.com/blog'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='page-content'>
          <Grid>
            <InterviewTemplate
              description='Workflow Automation '
              URL='https://www.pipedrive.com/en/blog/workflow-automation'
              img='https://cms.pipedriveassets.com/workflow-automation.gif'
            />
            <InterviewTemplate
              description='Seven Principles of software testing'
              URL='https://www.geeksforgeeks.org/software-engineering-seven-principles-of-software-testing/?ref=lbp'
              img='https://www.qaoncloud.com/wp-content/uploads/2019/09/7-PRINCIPLES-OF-SOFTWARETESTING1.png'
            />
            <InterviewTemplate
              description='7 Stages Of System Development Life Cycle (SDLC)'
              URL='https://dreamsoft4u.com/blog/7-stages-of-the-software-development-life-cycle-sdlc'
              img='https://dreamsoft4u.com/blog/wp-content/uploads/2020/07/7-Stages-Of-The-Software-Development-Life-Cycle-SDLC.png'
            />
            <InterviewTemplate
              description='7 Web Developer Interview Questions and Answers'
              URL='https://www.indeed.com/hire/interview-questions/web-developer?aceid=&gclid=Cj0KCQjwyJn5BRDrARIsADZ9ykFxa2SmNgl6dWXeAgjjPsdIJjtvbRsB61FJIMz3pXVTzkf2-iY4J-QaAm3gEALw_wcB'
              img='https://cdn.seeklearning.com.au/media/images/career-guide/article/career-advice/web_images/blogs/214/3725/how_to_prepare_for_a_video_interview_like_a_pro_940x485.jpg'
            />
            <InterviewTemplate
              description='Data structure, Algorithm & 
Object-Oriented Design'
              URL='https://leetcode.com/problems/two-sum/'
              img='https://res.cloudinary.com/practicaldev/image/fetch/s--u2bcoOHC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9da6rnlxgxq8fv8degu4.png'
            />
            <InterviewTemplate
              description='Linkedin quiz assessment, test, questions and answers '
              URL='https://www.udemy.com/user/vedanta-technologies/'
              img='https://media-exp1.licdn.com/dms/image/C4E12AQGG_9qefNvkgQ/article-cover_image-shrink_720_1280/0/1570913370054?e=1614211200&v=beta&t=40BdUcSsi8JpgUn2XySwzQpo-VEWr5jYizODbb80XWU'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='page-content'>
          <Grid>
            <BlogTemplate
              description='Ark Investment ETF Track Application'
              URL='https://ark-track.alientomatoinvestment.com/'
              img='https://images.thinkadvisor.com/contrib/content/uploads/sites/415/2020/11/Wood_Cathie_BB_MI.jpg'
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
