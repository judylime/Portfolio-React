import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class AboutSkills extends Component {
  render() {
    return (
      <Grid noSpacing>
        <Cell align col={12}>
          <div
            className='mdl-grid--no-spacing'
            style={{ display: 'flex', margin: 0 }}
          >
            <Cell col={3} style={{ backgroundColor: 'lightblue' }}>
              {this.props.skill}
            </Cell>
            <Cell col={9}>
              <ProgressBar
                style={{ width: '75%', height: '100%', color: 'lightblue' }}
                progress={this.props.progress}
                buffer={90}
              />
            </Cell>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default AboutSkills;
