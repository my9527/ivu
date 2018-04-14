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


  state={
    payment:'wxpay'
  }

  changePayMent(payment){
    this.setState({
      payment
    })
  }
  render(){

    const goTest = ()=>{
      this.props.history.push('/test')
    }
    const headerRight = <div onClick={e=>goTest()} className="header-r h-r h-cnt"><span className="img-icon-calendar right-small "></span></div>


    return(
      <div className="page-pay-pay">
        <Header title="党员缴费" rightContent={headerRight} />

        <div className="card">
            <div className="pic">
              <img className="thumbnail" src={require('../../res/imgs/dangzhang.png')} alt=""/>
            </div>
          <div className="info">
            <div className="top row">
              <span className="fee">￥20.00</span>
              <span className="name">彭小波</span>
            </div>
            <div className="bot row">
              2018年4月党费
            </div>
          </div>
        </div>
        <div className="row pay-row" onClick={e=>this.changePayMent('wxpay')}>
          <div className="type">
            <span className="img-icon-wx-pay pay-icon"></span>
            <span>微信支付</span>
          </div>
          <div className="check">
            <span className={this.state.payment==='wxpay'?'img-icon-checked':'img-icon-circle'}></span>

          </div>
        </div>
        <div className="row pay-row" onClick={e=>this.changePayMent('alipay')}>
          <div className="type">
            <span className="img-icon-ali-pay pay-icon"></span>
            <span>支付宝</span>
          </div>
          <div className="check">
            <span className={this.state.payment==='alipay'?'img-icon-checked':'img-icon-circle'}></span>
          </div>
        </div>
        <div className="row ">
          <SubBtn title="确认支付"></SubBtn>
        </div>


      </div>
    )
  }
}