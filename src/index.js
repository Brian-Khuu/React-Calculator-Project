import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CalButton extends React.Component {
    render(){
    return (
        <button
        className="c_button">
        {this.props.value}
        </button>
    );
    }
}

class Calculator extends React.Component {

    renderButton(i) {
        return <CalButton
        value={i}

        />
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
/*
class Toggle extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
*/

const tempNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function BoilingPoint(props) {
    if (props.celsius >= 100) {
        return <p>The water boils.</p>;
    }
    return <p>The water does not boil.</p>;
}

class WaterCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''}
    }

    handleChange = (e) => {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const temp = this.props.temp;
        return (
            <fieldset>
                <legend>Enter temperature in {tempNames[temp]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingPoint
                    celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

class WaterDisplay extends React.Component {
    render() {
        return (
            <div>
                <WaterCalculator temp ="c" />
                <WaterCalculator temp ="f" />
            </div>
        )
    }
}

ReactDOM.render(
    <WaterDisplay />,
    document.getElementById('root')
);