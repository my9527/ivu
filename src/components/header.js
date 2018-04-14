/**
 * Created by my on 2018-04-13
 * [biref]
 */


import React, {Component} from 'react';

import "./header.less"


export default class CmptHeader extends Component {
    leftClick() {
        if (this.props.leftClick) {
            this.props.leftClick()
        } else if (this.props.preventDefault) {
            return
        }

        this.props.history.go(-1);
    }

    render() {

        const {title, leftContent = <span className='img-icon-nav-back'></span>, rightContent = null} = this.props;
        return (
            <div className="cmpt-header">
                <div onClick={e => this.leftClick()} className="h-cnt h-l">
                    {leftContent}
                </div>
                <div className="h-title">{title}</div>
                <div className="h-cnt h-r">{rightContent}</div>

            </div>
        )
    }
}