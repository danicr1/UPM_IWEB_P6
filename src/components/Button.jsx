import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className="">
                <button className="" /*onClick={this.props.onClickFunction}*/>{this.props.text}</button>
            </div>
        );
    }
}

export default Button;