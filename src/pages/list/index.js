/**
 *
 * created by yanglei on 2018/4/14
 *
 */

import React, {Component} from 'react';
import Header from '../../components/header';

import './index.less'


export default class PageList extends Component{

  static defaultProps = {
    list:[]
  }

  render(){

    const goTest = ()=>{
      this.props.history.push('/test')
    }
    const headerRight = <div onClick={e=>goTest()} className="header-r h-r h-cnt"><span className="img-icon-calendar right-small "></span></div>

    return(
      <div className="page-list">
        <Header title="党员缴费" rightContent={headerRight} />
        <div className="list">
          <div className="card">
              <div className="date-cnt">
                  <div className="date-str">201804</div>
              </div>
              <div className="info">
                  <div className="row fee-row">
                    <span className="fee f28">$20</span>
                    <span className="statu f24">支付成功</span>
                  </div>
                  <div className="row">
                    <span className="orderNo f24">DF0001</span>
                    <span className="date f24">2018/04/08</span>
                  </div>

              </div>
              <span className="img-icon-arrow-right"></span>
          </div>
          <div className="card">
            <div className="date-cnt">
              <div className="date-str">201804</div>
            </div>
            <div className="info">
              <div className="row fee-row">
                <span className="fee f28">$20</span>
                <span className="statu f24">支付成功</span>
              </div>
              <div className="row">
                <span className="orderNo f24">DF0001</span>
                <span className="date f24">2018/04/08</span>
              </div>

            </div>
            <span className="img-icon-arrow-right"></span>
          </div>
        </div>
      </div>
    )
  }
}