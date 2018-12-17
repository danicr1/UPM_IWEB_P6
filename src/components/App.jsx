import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from "./Header";
import Game from './Game';

import { questionAnswer } from "../redux/actions";


class App extends Component {
    constructor(props) {
        super(props);
        this.onQuestionAnswer = this.onQuestionAnswer.bind(this);
    }

    onQuestionAnswer(currentQuestion, answer) {
        this.props.dispatch(questionAnswer(currentQuestion, answer));
    }

    render() {
        return (
            <div>
                <Header title="Quiz game" />
                <Game question={this.props.questions[this.props.currentQuestion]} onQuestionAnswer={(answer) => {
                    this.onQuestionAnswer(this.props.currentQuestion, answer)
                }} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(App);
