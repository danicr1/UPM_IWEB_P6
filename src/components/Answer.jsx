import React, { Component } from 'react';

class Answer extends Component {
    render() {
        return (
            <div className="">
                <input type="text" value={this.props.userAnswer || ''}
                       onChange={(e) => {
                           this.props.onQuestionAnswer(e.target.value);
                       }} />
            </div>
        );
    }
}

export default Answer;