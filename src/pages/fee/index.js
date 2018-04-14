import React, {Component} from 'react';

import classnames from 'classnames';

import http from '../../utils/request';
import Header from '../../components/header';
import SubBtn from '../../components/subBtn';
import DatePicker from 'react-mobile-datepicker';


import {numToFixed, getUrlParams, dateFormat} from '../../utils/tool';

import './index.less';


export default class PageFee extends Component {


    state = {
        amount: 0,
        mon: (getUrlParams().mon || Date.now()) * 1,
        time: new Date((getUrlParams().mon || Date.now()) * 1),
        isOpen: false,
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

    goPay() {
        const {amount, mon} = this.state;
        if (amount < 1) {
            return alert('请填写缴费金额');
        }
        this.props.history.push('/pay?amount=' + this.state.amount + "&mon=" + this.state.mon);
    }

    setAmount(e) {
        const value = e.target.value.trim();
        this.setState({
            amount: value
        })
    }

    render() {

        const goTest = () => {
            // this.props.history.push('/test?am=')
            this.setState({
                isOpen: true
            })
        }
        const headerRight = <div onClick={e => goTest()} className="header-r h-r h-cnt"><span
            className="img-icon-calendar right-small "></span></div>


        return (
            <div className="page-fee">
                <Header {...this.props} title="党费缴纳" rightContent={headerRight}/>
                <div className="fee-card">
                    <div className="month text-left">{dateFormat(new Date(this.state.mon), 'yyyy-MM')}</div>
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
                        <label htmlFor="feeNum">请输入本次缴费金额</label><input className="input" placeholder="0"
                                                                        onChange={e => this.setAmount(e)} id="feeNum"
                                                                        type="number"/>
                    </div>
                </div>
                <div className="row tips-row">
                    <div className="tips">
                        建议您缴纳金额总数，应大于当月应缴纳党费。
                    </div>
                </div>

                <div className="row">
                    <SubBtn clickFn={this.goPay.bind(this)} title="前往缴费"></SubBtn>

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