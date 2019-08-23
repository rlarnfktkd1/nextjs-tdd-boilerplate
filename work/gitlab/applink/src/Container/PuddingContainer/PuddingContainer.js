import React, { Component } from 'react';
import "./PuddingContainer.scss"

import PuddingLogo from "../../assets/images/43-1@3x.png"

import PlayStoreLogo from "../../assets/images/market/45-1@3x.png"
import AppStoreLogo from "../../assets/images/market/46-1@3x.png"

class DasomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="pudding-container">
        <div className="pudding-container--header">
          <div className="pudding-container--header--image">
            <img src={PuddingLogo} alt="logo" className="pudding-container--header--image__logo" />
          </div>
          <div  className="pudding-container--header--title">
            <span className="pudding-container--header--title__main">원격 푸딩제어 서비스</span>
            <span className="pudding-container--header--title__name">푸딩콩 Download</span>
          </div>
        </div>
        <div className="pudding-container--contain">
          <a href="https://play.google.com/store/apps/details?id=com.roobo.pudding.wonderfull"><img src={PlayStoreLogo} alt="PlayStoreLogo" className="pudding-container--contain__playStore" /></a>
          <a href="https://apps.apple.com/kr/app/%ED%91%B8%EB%94%A9%EC%BD%A9/id1444988715"><img src={AppStoreLogo} alt="AppStoreLogo" className="pudding-container--contain__appStore" /></a>
        </div>
      </div>
    );
  }
}
 
export default DasomContainer;