/**
 *
 * created by yanglei on 2018/4/14
 *
 */


import React, {Component} from 'react';

import classnames from 'classnames';

import http from '../../utils/request';
import Header from '../../components/header';
import SubBtn from '../../components/subBtn';
import {numToFixed, dateFormat, getUrlParams} from '../../utils/tool';
import DatePicker from 'react-mobile-datepicker';


import './index.less';


export default class PageFee extends Component {


    state = {
        payment: 'wxpay',
        time: new Date(getUrlParams().mon * 1 || Date.now()),
        mon: getUrlParams().mon * 1 || Date.now(),
        isOpen: false
    }

    /**
     * 设置当前的支付方式
     * @param payment
     */
    changePayMent(payment) {
        this.setState({
            payment
        })
    }

    handleSelect(date) {
        console.log(date);
        this.setState({
            time: date,
            isOpen: false,
            mon: date.getTime()
        })
    }

    handleCancel() {
        this.setState({
            isOpen: false
        })
    }

    goPayPage() {
        this.props.history.push('/payRslt');
    }

    render() {

        const openDate = () => {
            // this.props.history.push('/test')
            this.setState({
                isOpen: true
            })
        }
        const params = getUrlParams();

        return (
            <div className="page-pay-pay">
                <Header {...this.props} title="党费缴纳"/>

                <div className="card">
                    <div className="pic">
                        <img className="thumbnail" src={require('../../res/imgs/dangzhang.png')} alt=""/>
                    </div>
                    <div className="info">
                        <div className="top row">
                            <span className="fee">￥{numToFixed(params.amount * 1)}</span>
                            <span className="name">彭小波</span>
                        </div>
                        <div className="bot row">
                            {dateFormat(new Date(this.state.mon), 'yyyy年MM月')}党费
                        </div>
                    </div>
                </div>
                <div className="row pay-row" onClick={e => this.changePayMent('wxpay')}>
                    <div className="type">
                        <span className="img-icon-wx-pay pay-icon"></span>
                        <span>微信支付</span>
                    </div>
                    <div className="check">
                        <span
                            className={this.state.payment === 'wxpay' ? 'img-icon-checked' : 'img-icon-circle'}></span>

                    </div>
                </div>
                <div className="row pay-row" onClick={e => this.changePayMent('alipay')}>
                    <div className="type">
                        <span className="img-icon-ali-pay pay-icon"></span>
                        <span>支付宝</span>
                    </div>
                    <div className="check">
                        <span
                            className={this.state.payment === 'alipay' ? 'img-icon-checked' : 'img-icon-circle'}></span>
                    </div>
                </div>
                <div className="row ">
                    <SubBtn clickFn={e => this.goPayPage()} title="确认支付"></SubBtn>
                </div>
                <DatePicker
                    showFormat="YYYY-MM"
                    dateFormat={["YYYY", 'MM']}
                    value={this.state.time}
                    isOpen={this.state.isOpen}
                    onSelect={this.handleSelect.bind(this)}
                    onCancel={e => this.handleCancel()}
                />


            </div>
        )
    }
}