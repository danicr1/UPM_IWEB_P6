import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div className="">
                <p className="">{this.props.questionText}</p>
            </div>
        );
    }
}

export default Question;