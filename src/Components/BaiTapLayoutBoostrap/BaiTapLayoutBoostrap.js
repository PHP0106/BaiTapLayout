import React, { Component } from 'react';
import BTHeader from './BTHeader';
import BTFooter from './BTFooter';
import BTBody from './BTBody';

export default class BaiTapLayoutBoostrap extends Component {
    render() {
        return (
            <div className="">
                <BTHeader></BTHeader>
                <BTBody></BTBody>
                <BTFooter></BTFooter>
            </div>
        )
    }
}
