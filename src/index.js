import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CalButton extends React.Component {
    render(){
    return (
        <button className="c_button">
        {this.props.value}
        </button>
    );
    }
}

class Calculator extends React.Component {
    renderButton(i) {
        return <CalButton value={i} />
    }
    render() {
    return (
        <div>
        {this.renderButton(0)}
        {this.renderButton(1)}
        {this.renderButton(2)}
        {this.renderButton(3)}
        {this.renderButton(4)}
        {this.renderButton(5)}
        {this.renderButton(6)}
        {this.renderButton(7)}
        {this.renderButton(8)}
        {this.renderButton(9)}
        </div>
        );
    }
}


function App() {
    return (
        <div>
            <Calculator/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);