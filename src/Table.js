/**
 * Created by caihong on 2018/3/1.
 */
import React, {Component} from 'react';

export default class Root extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        console.log(document.defaultView);
    }


    render() {
        return (
            <div style={{textAlign: 'right'}}>
                <span>刷新</span>
                <span> 
                </span>
            </div>);
    }
}