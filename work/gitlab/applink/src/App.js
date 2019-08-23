import React from 'react';
import "./App.scss"

import MainContainer from "./Container/MainContainer/MainContainer"


function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {  
//       user: "",
//       isComplete: false
//     }

//     this.onClickSubmit = this.onClickSubmit.bind(this);
//     this.onchangeInput = this.onchangeInput.bind(this);


//   }

//   onchangeInput(e) {
//     e.stopPropagation();

//     this.setState({
//       user: e.target.value
//     })
//   }
//   onClickSubmit() {

//   }
//   render() { 
//     const {user} = this.state;

//     return ( 
//       <div>
//         <h4>
//         {isComplete ?}
//           {user}님 환영합니다.
//         </h4>
//         <div class="contents">
//           <label for="user-name">사용자 이름: </label>
//           <input type="text" name="user-name" id="user-name" onChange={e => this.onchangeInput(e)}/>
//           <button type="button" onClick={e => this.onClickSubmit(e)} >입력</button>
//         </div>
//       </div>
//      );
//   }
// }
 
// export default App;