import React, { Component } from 'react';

class ConfirmPage extends Component {
  
  render() {  
    return (
      <div>
      Please verify your input!
          <br/> <br/>
          Name is <strong> "{this.props.name}" </strong> &nbsp; &nbsp; &nbsp;Email is <strong> "{this.props.email}" </strong>
          <br/> <br/>
          <button onClick={this.props.submitForm}>Submit</button>
          <button onClick={this.props.resetForm}>Restart</button>
      </div>
    );
  }
}

export default ConfirmPage;