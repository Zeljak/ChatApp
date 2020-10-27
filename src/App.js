import React, {Component} from "react";
import ListOfMessages from "./Components/ListOfMessages";
import './App.css';
import { randomColor, randomName } from "./Components/UserName";
import Input from "./Components/Input";
import Image from "./Components/image_talking.jpg"

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
        <img className="image" src={Image} alt="chat logo"/>

        <ListOfMessages
        messages={this.state.messages}
        currentMember={this.state.member}/>

        <Input
        onSendMessage={this.onSendMessage}/>
        
      </div>
    </div>
  );
}

}
