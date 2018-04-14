/**
 *
 * created by yanglei on 2018/4/14
 *
 */

import  React from 'react';

import './subBtn.less';

const SubBtn = (props)=>{

  const {clickFn = e=>{}} = props;
  return (
    <div onClick={e=>clickFn(e)} className={`cmpt-sub-btn ${props.cls || ''}`}>
      <div className="opt-btn-cnt">
        <div className="opt-btn">{props.title}</div>
      </div>
    </div>
  )
};

export default SubBtn;