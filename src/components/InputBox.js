import React, { Component } from 'react';

class InputBox extends Component {
  
  _handleSubmit(event){
    event.preventDefault();
    if (this.props.name === ''){
      this.props.changeName(this.refs.textInput.value)
      this.refs.textInput.value = ''
    }
    else if (this.props.email === ''){
      this.props.changeEmail(this.refs.textInput.value)
      this.refs.textInput.value = ''
    }
  }

 displayInput = () => {
    if (this.props.name === ''){
      return(
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          Enter Name:
          <input type="text" ref='textInput'/>
          <button>Submit</button>
        </form>
      </div>
      )}
    else if (this.props.email === ''){
      return(
        <div>
          <form onSubmit={this._handleSubmit.bind(this)}>
            Enter Email:
            <input type="text" ref='textInput'/>
            <button>Submit</button>
          </form>
        </div>
        )
    }
    else {return "All done!"}
  }

  render() {  
    return (
      this.displayInput()
    );
  }
}

export default InputBox;