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
              img='https://getbootstrap.com/docs/5.0/assets/img/bootstrap-icons@2x.png'
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
              description='Sass is known as one of the most mature ways of extending CSS. It is a preprocessor for CSS.'
              URL='https://sass-lang.com/'
              img='https://i1.wp.com/blog.alexdevero.com/wp-content/uploads/2015/03/sass-logo.jpg?resize=1024%2C512&ssl=1'
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
            <TutorialTemplate
              description='A modern responsive front-end framework based on Material Design'
              URL='https://materializecss.com/'
              img='https://colinstodd.com/images/posts/matcss-min.png'
            />
            <TutorialTemplate
              description='Meteor provides a platform to develop apps for both the web and mobile platforms. '
              URL='https://www.meteor.com/developers/tutorials'
              img='https://www.valuecoders.com/blog/wp-content/uploads/2015/10/Meteor-400x270.png'
            />
            <TutorialTemplate
              description='The Polymer Project is a JS library that was initiated by chrome with the purpose of making the web better.'
              URL='https://www.polymer-project.org/'
              img='https://image.slidesharecdn.com/karolemeas-google-polymer-170221091355/95/google-polymer-framework-1-638.jpg?cb=1487744865'
            />
            <TutorialTemplate
              description='Foundation is another front-end development tool that can be used on any device, medium, or platform. '
              URL='https://get.foundation/learn/tutorials.html'
              img='https://uploads.sitepoint.com/wp-content/uploads/2016/11/1479848254jsf-logo-300x93.png'
            />

            <TutorialTemplate
              description='Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser.'
              URL='https://developers.google.com/web/tools/chrome-devtools'
              img='https://developers.google.com/web/tools/chrome-devtools/images/panels/elements.png'
            />
            <TutorialTemplate
              description='The web speech API is another open-source tool launched by Google. It is used to add speech recognition to front-end applications.'
              URL='https://wicg.github.io/speech-api/'
              img='https://nullcast.io/content/images/2020/04/web_speech.png'
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
              description='Block Formatting Contexts in CSS : A Block Formatting Context(BFC) is part of the visual CSS rendering of a web page in which block boxes are laid out. '
              URL='https://medium.com/@ritz078/block-formatting-contexts-in-css-3a9555355019'
              img='https://miro.medium.com/max/700/1*DsrHwttBVg7aNg41VJxy0g.png'
            />
            <NotesTemplate
              description='Issue with babel-jest dependency when running npm start in a React app'
              URL='https://stackoverflow.com/questions/53089122/issue-with-babel-jest-dependency-when-running-npm-start-in-a-react-app'
              img='https://i2.wp.com/everyday.codes/wp-content/uploads/2020/02/opengraph.png?w=796&ssl=1'
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
              description='https://www.onlineinterviewquestions.com/wordpress-interview-questions/'
              URL='https://www.onlineinterviewquestions.com/wordpress-interview-questions/'
              img='https://mk0testdemonsitv8fjd.kinstacdn.com/wp-content/uploads/2019/05/wordpress.gif'
            />
            <InterviewTemplate
              description='Top 50 PHP Interview Questions You Must Prepare in 2021'
              URL='https://www.edureka.co/blog/interview-questions/php-interview-questions/'
              img='https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/01/1280px-PHP-logo.svg_-528x285.png'
            />
            <InterviewTemplate
              description='Top 50 MySQL Interview Questions & Answers	'
              URL='https://career.guru99.com/top-50-mysql-interview-questions-answers/'
              img='https://career.guru99.com/wp-content/uploads/2014/07/MySQL.svg_.png'
            />
            <InterviewTemplate
              description='44 Practical Apache Web Server Interview Questions with Answers'
              URL='https://geekflare.com/apache-interview-questions-answers/'
              img='https://pbs.twimg.com/media/DWbNPSFV4AAtIry?format=jpg&name=small'
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
            <InterviewTemplate
              description='Coderbyte is the #1 website for technical interview prep and coding challenges'
              URL='https://coderbyte.com/profile/superlianou'
              img='https://ksr-ugc.imgix.net/assets/029/406/416/90153f9634ea486e39dc91cef650b3ec_original.png?ixlib=rb-2.1.0&w=700&fit=max&v=1591739748&auto=format&frame=1&q=92&s=5c65c8fc558c413a843a1ddcf0c662aa'
            />
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
              description='TOP 15 FRONT-END DEVELOPMENT TOOLS TO USE IN 2020'
              URL='https://yugasa.com/web/top-15-front-end-development-tools-to-use-in-2020/'
              img='https://yugasa.com/wp-content/uploads/2020/09/top-15-front-end-development-tools-to-use-in-2020.jpg'
            />
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
