import React, {Component} from 'react';

import classnames from 'classnames';

import http from '../../utils/request';
import Header from '../../components/header';
import SubBtn from '../../components/subBtn';
import {numToFixed} from '../../utils/tool';

import './index.less';


// 生成分类title
const genCate = (title)=>{

  return(
    <div className="cate-name">
      {title}
    </div>
  )
}


//



//

const genMonIt = (item, idx)=>{

  return(
    <div key={idx} className="month-fee-item">
      <div className='mon'>{item.month}</div>
      <div className={`fee ${item.fee === 0?'fee-red':''}`}>{numToFixed(item.fee)}</div>
    </div>
  )
}

export default class PageHome extends Component {


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
    const headerRight = <div onClick={e=>goTest()} className="header-r h-r h-cnt"><span>2018</span><span className="img-icon-nav-back right-small "></span></div>


    const tempData=[{
      month:'1月',
      fee: 12
    },{
      month:'2月',
      fee: 1
    },{
      month:'3月',
      fee: 3
    },{
      month:'4月',
      fee: 2
    },{
      month:'5月',
      fee: 8
    },{
      month:'6月',
      fee: 8
    },{
      month:'7月',
      fee: 0
    },{
      month:'8月',
      fee: 8
    },{
      month:'9月',
      fee: 8
    },{
      month:'10月',
      fee: 8
    },{
      month:'11月',
      fee: 8
    },{
      month:'12月',
      fee: 8
    }]
		return(
			<div className="page-home">
        <Header title="党员缴费" rightContent={headerRight} />

        <div className="row">
          {genCate('当前缴费基数信息')}

          <div className="fee-base-row">
            <span>缴费类型</span>
            <span>普通在职党员</span>
          </div>
          <div className="fee-base-row">
            <span>缴费金额</span>
            <span className='fee-red'>¥60</span>
          </div>
        </div>

        <div className="row">
          {genCate('缴费记录')}

          <div className="month-fee-row">
            <div className="fee-row-cnt">
              {tempData.slice(0,6).map((it,idx)=>{
                return genMonIt(it, idx)
              })}
            </div>
          </div>
          <div className="month-fee-row">
            <div className="fee-row-cnt">
              {tempData.slice(6).map((it,idx)=>{
                return genMonIt(it, idx)
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="opt-btn-cnt">
            <div className="opt-btn">前往缴费</div>
          </div>
        </div>
        <SubBtn title="前往缴费"></SubBtn>
        <div className="row">
          <div className="tips">
            注意：<br/>
            请按时缴纳每月党费，连续超过6个月未缴党费者，将视为自动退党
          </div>
        </div>
			</div>
		)
	}
}