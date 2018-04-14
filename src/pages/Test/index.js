import React, {Component} from 'react';

import classnames from 'classnames';

import http from '../../utils/request';
import Header from '../../components/header';
import {numToFixed} from '../../utils/tool';

import './index.less';



export default class PageFee extends Component {


  login=()=>{
    http.post('/login', {
      data:{
        account:'ll',
        passward:'ddd'
      },
      isFormData:true
    })
  }
  render(){

    const goTest = ()=>{
      this.props.history.push('/test')
    }
    const headerRight = <div onClick={e=>goTest()} className="header-r h-r h-cnt"><span className="img-icon-calendar right-small "></span></div>


    return(
      <div className="page-fee">
        <Header title="党员缴费" rightContent={headerRight} />
        <div className="fee-card">
          <div className="month text-left">2018-4</div>
          <div className="col-fees">
            <div className="col-fee">
              <div className="title">
                应缴纳费用
              </div>
              <div className="fee">
                ¥20.00
              </div>
            </div>
            <div className="col-fee">
              <div className="title">
                已缴纳费用
              </div>
              <div className="fee">
                ¥20.00
              </div>
            </div>
          </div>
        </div>

        <div className="row padding-row">
          <div className="input-row">
            <label htmlFor="feeNum">请输入本次缴费金额</label><input className="input" id="feeNum" type="number" />
          </div>
        </div>
        <div className="row tips-row">
            <div className="tips">
              建议您缴纳金额总数，应大于当月应缴纳党费。
            </div>
        </div>

        <div className="row">
          <div className="opt-btn-cnt">
            <div className="opt-btn">前往缴费</div>
          </div>
        </div>

      </div>
    )
  }
}