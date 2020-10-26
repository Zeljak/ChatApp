import React, {Component} from "react";

export default class Input extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
        };
    }

    handleSendMessage = (e) => {
        e.preventDefault();
        this.props.onSendMessage(this.state.text);
        this.setState({text: ""});
    }

    handleTextChange = (e) => {
        this.setState({text: e.target.value});
    }

    render(){
        return(
            <div className="Input">
                <form onSubmit={this.handleSendMessage}>
                    <input 
                    onChange={this.handleTextChange}
                    value={this.state.text}
                    type="text" 
                    placeholder="Type your message and press ENTER">
                    </input>

                    <button className="button" type="submit">ENTER</button>


                </form>
            </div>
        );
    }
}

