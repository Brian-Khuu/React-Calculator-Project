import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Calculator Output Pad Component
class CalOutput extends React.Component {
    render() {
        let {result} = this.props;
        return (
        <div className="result">
        <p>{result}</p>
        </div>
        )
    }
}


//Calculator Input Pad Component
class CalculatorInput extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
        <div className="button">
            <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
            <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
            <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
            <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>

            <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
            <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>

            <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
            <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
            <button name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
            <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
            <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>


        </div>
        );
    }
}


//Main Calculator Component
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {result: ''}
    }

    calculate = () => {
        try {
            this.setState({
                result:(eval(this.state.result) || "" ) + ""
            })
        }
        catch (e) {
            this.setState({
                result: "error"
            })
        }
    }

    clear = () => {
        this.setState({
            result: ""
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    onClick = button => {
        if(button === "=") {
            this.calculate()
        }

        else if(button === "C") {
            this.clear()
        }

        else if(button === "CE") {
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }

    }


    render() {
        const output = this.state.output

        return (
        <div>
        <CalculatorInput onClick={this.onClick}/>
        <CalOutput result={this.state.result}/>
        </div>
    );

    }


}


//Main function
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
    <App />,
    document.getElementById('root')
);