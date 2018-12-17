import React from 'react';

import Content from "./Content";
import Actionbar from "./Actionbar";

export default class Game extends React.Component {
    render() {
        return (
            <div className="">
                <Content question={this.props.question} onQuestionAnswer={this.props.onQuestionAnswer} />
                <Actionbar />
            </div>
        );
    }
}