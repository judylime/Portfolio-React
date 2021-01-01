import React, { Component } from 'react';
import { Tab, Tabs, Grid } from 'react-mdl';
import BlogTemplate from '../components/BlogTemplate';
import NotesTemplate from '../components/NotesTemplate';
import InterviewTemplate from '../components/InterviewTemplate';
import TutorialTemplate from '../components/TutorialTemplate';

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
              description='Bootstrap · The most popular HTML, CSS, and JS library in the World'
              URL='https://getbootstrap.com/docs/5.0/getting-started/introduction/'
              img='https://blog.templatetoaster.com/wp-content/uploads/2019/09/What-is-Bootstrap.jpg'
            />
            <TutorialTemplate
              description='React – A JavaScript library for building user interfaces'
              URL='https://reactjs.org/docs/getting-started.html'
              img='https://miro.medium.com/max/700/1*yjH3SiDaVWtpBX0g_2q68g.png'
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
              description='Jest · Delightful JavaScript Testing framework maintained by Facebook, Inc.'
              URL='https://jestjs.io/docs/en/getting-started'
              img='https://ms314006.github.io/static/61b2001ca7ff66bffe5604dc0c52016d/5a4bd/Jest.jpg'
            />
            <TutorialTemplate
              description='Jira | Issue & Project Tracking Software | Atlassian'
              URL='https://www.atlassian.com/software/jira'
              img='https://www.herzum.com/wp-content/uploads/2020/08/jira.jpg'
            />
            <TutorialTemplate
              description='Vue is a progressive framework for building user interfaces'
              URL='https://vuejs.org/v2/guide/'
              img='https://miro.medium.com/max/1000/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg'
            />
            <TutorialTemplate
              description='Angular is a platform for building mobile and desktop web applications.'
              URL='https://angular.io/docs'
              img='https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png'
            />
            <TutorialTemplate
              description='AWS Certified Cloud Practitioner Training 2020'
              URL='https://www.youtube.com/watch?v=3hLmDS179YE'
              img='https://www.testpreptraining.com/blog/wp-content/uploads/2019/11/how-to-crack-aws-cloud-practitioner-certification-exam.jpg'
            />
            <TutorialTemplate
              description='Welcome to AWS Fundamentals: Going Cloud-Native'
              URL='https://www.coursera.org/learn/aws-fundamentals-going-cloud-native/home/welcome'
              img='https://miro.medium.com/max/700/1*b_al7C5p26tbZG4sy-CWqw.png'
            />

            <TutorialTemplate
              description='Master SEO Tools & Strategies - Earn a Certificate Online'
              URL='https://www.coursera.org/specializations/seo?utm_source=gg&utm_medium=sem&utm_campaign=14-SEO-UCDavis-US&utm_content=14-SEO-UCDavis-US&campaignid=365815267&adgroupid=33419324134&device=c&keyword=seo%20marketing&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=161355671907&hide_mobile_promo&gclid=CjwKCAiAirb_BRBNEiwALHlnDxRAPj8LY-pGAjX4lLPG-tabaKDrG_I6Kt8VaANgrEn6qW0g5R_unhoC7sUQAvD_BwE'
              img='https://miro.medium.com/max/700/1*0ifJ0FIu-phAq9z4_h4OKg.png'
            />
            <TutorialTemplate
              description='Deploying Node.js App on Heroku'
              URL='http://fullstackcorner.com/deploying-node-js-app-on-heroku/'
              img='http://fullstackcorner.com/wp-content/uploads/2017/06/herokuNode.jpg'
            />
            <TutorialTemplate
              description='Netlify: All-in-one platform for automating modern web projects'
              URL='https://docs.netlify.com/#get-started'
              img='https://cdn.sanity.io/images/ti7si9cx/production/656e951d31f3dc0f061a57466d01def70a81a6af-1500x1000.gif?w=1382'
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
              img='https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1562952581/jqctyinrganjts991d3w.jpg'
            />
            <NotesTemplate
              description='Notes-Quick tips, tricks, and hacks.'
              URL='https://coderguides.com/notes'
              img='https://coderguides.com/static/media/CoderGuides.075d0c92.webp'
            />
            <NotesTemplate
              description='How to fix Page Not Found on netlify'
              URL='https://dev.to/kapi1/how-to-fix-page-not-found-on-netlify-a4i'
              img='https://cdn.sanity.io/images/ti7si9cx/production/656e951d31f3dc0f061a57466d01def70a81a6af-1500x1000.gif?w=1382'
            />
            <NotesTemplate
              description='Simple Contact Form Submission With Netlify'
              URL='https://www.youtube.com/watch?v=6ElQ689HRcY'
              img='https://cdn.sanity.io/images/ti7si9cx/production/656e951d31f3dc0f061a57466d01def70a81a6af-1500x1000.gif?w=1382'
            />
            <NotesTemplate
              description='How to Use GitLab and GitHub Together'
              URL='https://steveperkins.com/migrating-projects-from-github-to-gitlab/'
              img='https://deployplace.com/uploads/gitlab-vs-github/gitlab-vs-github.jpg'
            />
            <NotesTemplate
              description='How Your Front-end Code Impacts Google Ranking: Top 5 Risky Areas'
              URL='https://medium.com/@stanislavgurin/how-your-front-end-code-impacts-google-ranking-top-5-risky-areas-8123513fd6ba'
              img='https://miro.medium.com/max/700/1*0ifJ0FIu-phAq9z4_h4OKg.png'
            />
            <NotesTemplate
              description='E-commerce Shopping Cart by using React'
              URL='https://www.youtube.com/watch?v=02ieJ1YXZM4'
              img='https://codingwithbasir.com/wp-content/uploads/2020/12/reactcart.png'
            />
            <NotesTemplate
              description='React: Write a Simple Counter'
              URL='https://forum.freecodecamp.org/t/react-write-a-simple-counter/168359'
              img='https://codingwithbasir.com/wp-content/uploads/2020/12/reactcart.png'
            />
            <NotesTemplate
              description='How to get the value of an input field using ReactJS?'
              URL='https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs'
              img='https://codingwithbasir.com/wp-content/uploads/2020/12/reactcart.png'
            />
            <NotesTemplate
              description='How to deploy React App to GitHub Pages'
              URL='https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a'
              img='https://miro.medium.com/max/700/1*5ybVj54fnQOms-TmENQArA.png'
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
              description='Build An Automated Testing Pipeline With GitLab CI/CD & Selenium Grid'
              URL='https://www.lambdatest.com/blog/automated-testing-pipeline-with-gitlab-ci-cd-and-selenium/'
              img='https://www.lambdatest.com/blog/wp-content/uploads/2020/03/GitLab-CI-CD-and-Selenium-Grid.jpg'
            />
            <InterviewTemplate
              description='What is Black Box Testing?'
              URL='https://www.rainforestqa.com/blog/2018-10-26-what-is-black-box-testing'
              img='https://wp-images.rainforestqa.com/wp-content/uploads/2018/01/fb5ae6a9088b3b48cff4e4a29de06359.png'
            />
            <InterviewTemplate
              description='white box testing'
              URL='https://searchsoftwarequality.techtarget.com/definition/white-box'
              img='http://4.bp.blogspot.com/-_LCeNcoLr8c/USSeshoupNI/AAAAAAAAAkM/SxZkrvutuGc/s1600/white-box-testing.png'
            />
            <InterviewTemplate
              description='7 Web Developer Interview Questions and Answers'
              URL='https://www.indeed.com/hire/interview-questions/web-developer?aceid=&gclid=Cj0KCQjwyJn5BRDrARIsADZ9ykFxa2SmNgl6dWXeAgjjPsdIJjtvbRsB61FJIMz3pXVTzkf2-iY4J-QaAm3gEALw_wcB'
              img='https://cdn.seeklearning.com.au/media/images/career-guide/article/career-advice/web_images/blogs/214/3725/how_to_prepare_for_a_video_interview_like_a_pro_940x485.jpg'
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
            <InterviewTemplate
              description='30 Day Vanilla JS Coding Challenge'
              URL='https://javascript30.com/'
              img='https://res.cloudinary.com/practicaldev/image/fetch/s--fni3zW3X--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ibunvefphkr79qsx6gef.png'
            />
            <InterviewTemplate
              description='edabit: The easiest way to learn coding'
              URL='https://edabit.com/challenges'
              img='https://austinkladke.files.wordpress.com/2019/09/edabit_fastest_way_to_learn.png?w=656'
            />
            <InterviewTemplate
              description='Data structure, Algorithm & 
              Object-Oriented Design'
              URL='https://leetcode.com/problems/two-sum/'
              img='https://res.cloudinary.com/practicaldev/image/fetch/s--u2bcoOHC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9da6rnlxgxq8fv8degu4.png'
            />
            <TutorialTemplate
              description='12 Beginner Python Projects - Youtube Coding Course'
              URL='https://www.youtube.com/watch?v=8ext9G7xspg'
              img='https://hackr.io/blog/python-projects/thumbnail/large'
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 4) {
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
              <Tab>Coding</Tab>
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
