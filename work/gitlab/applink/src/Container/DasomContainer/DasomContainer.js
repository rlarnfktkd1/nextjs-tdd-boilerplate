import React, { Component } from 'react';
import "./DasomContainer.scss"

import DasomLogo from "../../assets/images/42-1@3x.png"

import PlayStoreLogo from "../../assets/images/market/45-1@3x.png"
import AppStoreLogo from "../../assets/images/market/46-1@3x.png"

class DasomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="dasom-container">
        <div className="dasom-container--header">
          <div className="dasom-container--header--image">
            <img src={DasomLogo} alt="logo" className="dasom-container--header--image__logo" />
          </div>
          <div  className="dasom-container--header--title">
            <span className="dasom-container--header--title__main">실버케어 서비스</span>
            <span className="dasom-container--header--title__name">다솜이 Download</span>
          </div>
        </div>
        <div className="dasom-container--contain">
          <a href="https://play.google.com/store/apps/details?id=com.roobo.pudding.wonderfull.dasom"><img src={PlayStoreLogo} alt="PlayStoreLogo" className="dasom-container--contain__playStore" /></a>
          <a href="https://apps.apple.com/kr/app/%EB%8B%A4%EC%86%9C%EC%9D%B4/id1467336442"><img src={AppStoreLogo} alt="AppStoreLogo" className="dasom-container--contain__appStore" /></a>
        </div>
      </div>
    );
  }
}
 
export default DasomContainer;