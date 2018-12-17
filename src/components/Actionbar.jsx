import React from 'react';
import Button from './Button'

export default class Actionbar extends React.Component {
    render() {
        return (
            <div className="">
                <Button className="" text="Anterior" /*onClickFunction={}*/ />
                <Button className="" text="Siguiente" /*onClickFunction={}*/ />
                <Button className="" text="Submit" /*onClickFunction={}*/ />
            </div>
        );
    }
}