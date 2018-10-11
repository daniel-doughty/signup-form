import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox'
import ConfirmPage from './components/ConfirmPage'

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      name: '',
      email: '',
      formSubmitted: false
    }
  }
  
  changeName (input){
    this.setState({name: input})
  }

  changeEmail (input){
    this.setState({email: input})
  }

  resetForm () {
    this.setState({
        name: '',
        email: ''})}

  submitForm () {this.setState({formSubmitted: true})}




  render() {
    if (this.state.formSubmitted){
      return (
        <div className="App">
          <br/>
          <br/>
          <strong>Thanks Buddy!</strong>
        </div>
      )
    }

    else if (this.state.email === ''){
      return (    
        <div className="App">
          <InputBox changeName={this.changeName.bind(this)} changeEmail={this.changeEmail.bind(this)} name={this.state.name} email={this.state.email}/> 
        </div>
      );
    }
    else {
      return (

        <div className="App">
          <ConfirmPage name={this.state.name} email={this.state.email} resetForm={this.resetForm.bind(this)} submitForm={this.submitForm.bind(this)}/>
        </div>
    )}
  }
}

export default App;
