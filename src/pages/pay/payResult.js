/**
 *
 * created by yanglei on 2018/4/14
 *
 */

import React from 'react';

import Header from '../../components/header';
import SubBtn from '../../components/subBtn';
import "./index.less";
const payResult = (props)=>{


  return(
    <div className="page-pay-result">
      <Header title="支付成功" />

      <div className="content">
        <span className={`pay-rslt ${props.result || 'img-icon-pay-success'}`}></span>
      </div>
      <div className="btns">
        <SubBtn cls='btn check-btn' title="查看订单"></SubBtn>
        <SubBtn cls='btn' title="返回"></SubBtn>
      </div>
    </div>
  )
}

export default payResult;