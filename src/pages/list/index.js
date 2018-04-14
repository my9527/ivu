/**
 *
 * created by yanglei on 2018/4/14
 *
 */

import React, {Component} from 'react';
import Header from '../../components/header';
import DatePicker from 'react-mobile-datepicker';
import {numToFixed, getUrlParams, dateFormat} from '../../utils/tool';


import './index.less'


export default class PageList extends Component {

    static defaultProps = {
        list: []
    };

    state = {
        isOpen: false,
        time: new Date(),
        modified: false
    }

    getList() {

    }

    handleSelect(date) {
        console.log(date);
        this.setState({
            time: date,
            isOpen: false,
            mon: date.getTime(),
            modified: true
        })
    }

    handleCancel() {
        this.setState({
            isOpen: false
        })
    }

    goDetail(id) {
        this.props.history.push('/payDetail?id=' + id)
    }

    render() {

        const openDate = () => {
            this.setState({
                isOpen: true
            })
            // this.props.history.push('/test')
        }
        const headerRight = <div onClick={e => openDate()}
                                 className="header-r h-r h-cnt"><span
            className="date-str">{this.state.modified ? dateFormat(new Date(this.state.mon), 'yyyy-MM') : ""}</span><span
            className="img-icon-calendar right-small "></span></div>

        return (
            <div className="page-list">
                <Header {...this.props} title="我的党费订单" rightContent={headerRight}/>
                <div className="list">
                    <div onClick={e => this.goDetail(1)} className="card">
                        <div className="date-cnt">
                            <div className="date-str">201804</div>
                        </div>
                        <div className="info">
                            <div className="row fee-row">
                                <span className="fee f28">￥20</span>
                                <span className="statu f24">支付成功</span>
                            </div>
                            <div className="row">
                                <span className="orderNo f24">DF0001</span>
                                <span className="date f24">2018/04/08</span>
                            </div>

                        </div>
                        <span className="img-icon-arrow-right"></span>
                    </div>
                    <div onClick={e => this.goDetail(1)} className="card">
                        <div className="date-cnt">
                            <div className="date-str">201804</div>
                        </div>
                        <div className="info">
                            <div className="row fee-row">
                                <span className="fee f28">￥20</span>
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