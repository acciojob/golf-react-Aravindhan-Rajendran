import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: "0px" } // Initial position
        };

        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        // Add event listener for keydown event
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        // Clean up event listener
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });
    }

    handleKeyDown(event) {
        if (event.key === 'ArrowRight' || event.keyCode === 39) {
            this.moveBallRight();
        }
    }

    moveBallRight() {
        // Get the current left position of the ball and parse it to an integer
        const currentLeft = parseInt(this.state.ballPosition.left, 10);
        // Increase the left position by 5px
        this.setState({
            ballPosition: { left: `${currentLeft + 5}px` }
        });
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
