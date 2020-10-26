import React, {Component} from "react";
import ListOfMessages from "./Components/ListOfMessages";
import './App.css';
import { randomColor, randomName } from "./Components/UserName";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      member: {
        username: randomName(),
        color: randomColor()
      }
    }
  }
  
  render(){
  return (
    <div className="App">
      <div className="App-header">

        <ListOfMessages
        messages={this.state.messages}
        currentMember={this.state.member}/>
        
      </div>
    </div>
  );
}

}
