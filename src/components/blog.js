import React, { Component } from 'react'
import { Tab, Tabs, } from 'react-mdl'

// Simple header with scrollable tabs


export class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  render() {
    return (
      <div className='blog-grid'>
        <div className='page-title' style={{
          left: '50%',
          display: 'flex',
        }}>
          <h2>BLOG</h2>
          <hr />
        </div>
        <div className='page-content'>
          <div className="blog-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>All</Tab>
              <Tab>Lannisters</Tab>
              <Tab>Targaryens</Tab>
            </Tabs>
            <section>
              <div className="content">Content for the tab: {this.state.activeTab}</div>
            </section>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Blog
