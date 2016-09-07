import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {

    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {increasing: false}
    }

    // Update the component and add into html 'app' element
    update() {
        ReactDOM.render( <App val={ this.props.val + 1 }/> , document.getElementById('app') )
    }

    // Will pass here each time the component receive a props
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps: ' + nextProps.val);
        this.setState({increasing: nextProps.val > this.props.val})
    }

    // Condition to update only when this method return true
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 === 0;
    }

    // Render the component, but only the update method above will add into html element 'app'
    render() {
        console.log(this.state.increasing);
        return  (
            <button onClick={this.update}>
                { this.props.val }
            </button>)
    }

    // Oh yeah! Finally component update the state \o\
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps)
    }

}

// Default props value
App.defaultProps = { val: 0 }

export default App