import React from 'react';
import "./MainContainer.scss"

import DasomContainer from "../DasomContainer/DasomContainer";
import PuddingContainer from "../PuddingContainer/PuddingContainer";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="main">
        <div className="dasom">
          <DasomContainer />
        </div>
        <div className="pudding">
          <PuddingContainer />
        </div>
      </div>
    );
  }
}
 
export default MainContainer;