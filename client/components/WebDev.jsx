import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'

import aboutMe from '../sketches/aboutMe'
import BubbleCanvas from './bubbles/Canvas.jsx'


var canvas = {
  background: "#eee",
  opacity: "0.5"
};

var pattern = {
  position: "fixed",
}

class webDev extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutMe: aboutMe,
    }
}

  render() {
        return (
          <Router>
            <div>
              <br/> <br/> <br/> <br/>
              <div style={pattern} className='mandalaCentered'>
                <P5Wrapper sketch={this.state.aboutMe}/>
              </div>
              <div style={canvas}>
                <BubbleCanvas/>
              </div>
            </div>
          </Router>

        )}
  }

export default webDev
