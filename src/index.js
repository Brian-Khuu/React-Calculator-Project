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

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function Converter(temperature, conversion) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
    return '';
    }
    const output = conversion(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString()
}

class WaterCalculator extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const temp = this.props.temp;
        return (
            <fieldset>
                <legend>Enter temperature in {tempNames[temp]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class WaterDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', temp: 'c'};
    }

    handleCelsiusChange = (temperature) => {
        this.setState({temp: 'c', temperature});
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({temp: 'f', temperature})
    }

    render() {
        const temp = this.state.temp;
        const temperature = this.state.temperature;
        const celsius = temp === 'f' ? Converter(temperature, toCelsius) : temperature;
        const fahrenheit = temp === 'c' ? Converter(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <WaterCalculator
                temp ="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />
                <WaterCalculator
                temp ="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />

                <BoilingPoint
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

ReactDOM.render(
    <WaterDisplay />,
    document.getElementById('root')
);