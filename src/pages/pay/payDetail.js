/**
 *
 * created by yanglei on 2018/4/14
 *
 */
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
import {numToFixed} from '../../utils/tool';

import './index.less';


export default class PageFee extends Component {


    render() {
        
        return (
            <div className="page-pay-detail">
                <Header {...this.props} title="党费订单详情"/>

                <div className="card">
                    <div className="row">
                        <span className='fee-name'>支付金额</span>
                        <span className='fee'>￥90</span>
                    </div>
                    <div className='info'>2018年4月党费</div>
                </div>

                <div className="list">
                    <div className="row it-row">
                        <span className='title'>当前状态</span>
                        <span className='t-val'>支付成功</span>
                    </div>
                    <div className="row it-row">
                        <span className='title'>缴费类型</span>
                        <span className='t-val'>普通在职党员</span>
                    </div>
                    <div className="row it-row">
                        <span className='title'>缴费人</span>
                        <span className='t-val'>彭小波</span>
                    </div>
                    <div className="row it-row">
                        <span className='title'>所在单位</span>
                        <span className='t-val'>中共兴文党委</span>
                    </div>
                    <div className="row it-row">
                        <span className='title'>支付时间</span>
                        <span className='t-val'>2018/04/12</span>
                    </div>
                    <div className="row it-row">
                        <span className='title'>支付方式</span>
                        <span className='t-val'>支付宝</span>
                    </div>
                    <div className="row it-row">
                        <span className='title'>交易单号</span>
                        <span className='t-val'>DF00001</span>
                    </div>

                </div>


            </div>
        )
    }
}