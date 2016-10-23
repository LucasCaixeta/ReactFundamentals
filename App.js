import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    });
  }

  render() {
    return (
      <div>
        <NumInput ref="red" update={this.update}/>
        {this.state.red}
        <br/>
      </div>
    );
  }
};

class NumInput extends React.Component {
  render() {
    return (
      <div>
       <input
         ref="inp"
         type="range"
         min="0"
         max="255"
         onChange={this.props.update}
       />
      </div>
    )
  }
}

NumInput.propTypes = {

}

export default App
