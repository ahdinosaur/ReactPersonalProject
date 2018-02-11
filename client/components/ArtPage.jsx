import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import thisArt from '../data/artInfo.js'

class artPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
      show: false,
      x: 0,
    }

    this.showArt = this.showArt.bind(this)
    // this.scrollTo = this.scrollTo.bind(this)
  }
  componentDidMount() {
     this.setState({art:thisArt})
}

_onMouseMove(e) {
  this.setState({ x: e.screenX });
}

  hideAll(artToHide) {
      var mappedArt = this.state.art.map((art) => {
        if (artToHide.show == true) {
        } else {
         art.show = false; return art}
        this.setState({art: mappedArt})
      })
    }

  showArt(artToShow) {
      const {art} = this.state
        var index = art.findIndex(artItem => artItem.title === artToShow.title)
        art[index].show = !art[index].show
        this.setState({art})
  }


  render() {
      const { x } = this.state;
      console.log(x)

        return (
        <div className="parentHorizontal">
          <HorizontalScroll reverseScroll='true'>

            {this.state.art && this.state.art.map(art => {
              return ([
                <div onMouseMove={this._onMouseMove.bind(this)}><img onClick={ (e) => {this.hideAll(art); this.showArt(art)}} className='art img-responsive childHorizontal' src={art.img}/></div>,
                <div>{art.show == true && <div className='box'><h1>{art.title}</h1><p>{art.about}</p></div>}</div>
              ])
                }


            )}

          </HorizontalScroll>

          </div>
        )
    }
  }



export default artPage
