import React, { Component } from 'react';
import Question from "./Question";
import Answer from "./Answer";

class Content extends Component {
    render() {
        return (
            <div className="">
                <img src={""} alt={""} />
                <Question questionText={this.props.question.question} />
                <Answer userAnswer={this.props.question.userAnswer} onQuestionAnswer={this.props.onQuestionAnswer} />
            </div>
        );
    }
}

export default Content;