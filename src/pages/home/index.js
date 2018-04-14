import React, {Component} from 'react';

import classnames from 'classnames';
import DatePicker from 'react-mobile-datepicker';
import http from '../../utils/request';
import Header from '../../components/header';
import SubBtn from '../../components/subBtn';
import {numToFixed} from '../../utils/tool';
import axios from 'axios';


import './index.less';

const monMap = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
};
const tempData = Object.keys(monMap).map(mon => {
    return {
        month: monMap[mon] + '月',
        fee: 0
    }
})


// 生成分类title
const genCate = (title) => {

    return (
        <div className="cate-name">
            {title}
        </div>
    )
}


const genMonIt = (item, idx) => {

    return (
        <div key={idx} className="month-fee-item">
            <div className='mon'>{item.month}</div>
            <div className={`fee ${item.fee === 0 ? 'fee-red' : ''}`}>{numToFixed(item.fee)}</div>
        </div>
    )
}

export default class PageHome extends Component {


    state = {
        time: new Date(),
        isOpen: false,
        // monData: tempData,
        fetchYear: new Date().getFullYear(),
        data: {mons: tempData}
    }

    componentWillMount() {
        false && this.getData();
    }

    handleSelect(date) {
        console.log(date);
        this.setState({
            time: date,
            isOpen: false,
            fetchYear: date.getFullYear()
        });

        // 接口调通之后开启
        false && this.getData(date.getFullYear());
    }

    handleCancel() {
        this.setState({
            isOpen: false
        })
    }

    /**
     * 根据年份获取数据
     * @param year
     */
    getData(year = 2018) {
        axios.post('http://182.139.182.231:8082/WisdomPartyBuildingServices/api/PartyMembershipDues/GetPaymentData', {
            Params: {
                UnitPath: "3C65CD8B-5809-438C-8EB8-793EBAF4E5E1,9590ce74-d062-4696-a9b1-d16368f7c585,5d557ee7-5352-4bfb-a867-3ea271022d86,3db24930-5cdc-4c05-b0d5-4cce63c36deb",
                UserGuid: "0adfea55-4a07-496c-b6fb-ffff3c7f2d50",
                Year: year
            }
        })
            .then(res => {

                const data = res.data.Data;
                const monData = [];

                Object.keys(monMap).forEach(mon => {
                    monData.push({
                        month: `${monMap[mon]}月`,
                        fee: data[mon]
                    })
                });

                this.setState({
                    data: {
                        mons: monData,
                        type: data.DuesType,
                        perMon: data.PmbId * data.payablePartMoney
                    },

                })


            }, err => {
                alert('something goes wrong, we are trying to fixed it up')
            })
    }

    goPay() {
        this.props.history.push('/fee?mon=' + Date.now())
    }

    render() {

        const {data} = this.state;

        // 打开时间选择
        const openDate = () => {
            this.setState({
                isOpen: true
            })
            // this.props.history.push('/test')
        }
        const headerRight = <div onClick={e => openDate()} className="header-r h-r h-cnt"><span>2018</span><span
            className="img-icon-nav-back right-small "></span></div>


        return (
            <div className="page-home">
                <Header title="党费缴纳" rightContent={headerRight}/>

                <div className="row">
                    {genCate('当前缴费基数信息')}

                    <div className="fee-base-row">
                        <span>缴费类型</span>
                        <span>{data.type || '普通在职党员'}</span>
                    </div>
                    <div className="fee-base-row">
                        <span>缴费金额</span>
                        <span className='fee-red'>¥{data.perMon || 0}</span>
                    </div>
                </div>

                <div className="row">
                    {genCate('缴费记录')}

                    <div className="month-fee-row">
                        <div className="fee-row-cnt">
                            {data.mons.slice(0, 6).map((it, idx) => {
                                return genMonIt(it, idx)
                            })}
                        </div>
                    </div>
                    <div className="month-fee-row">
                        <div className="fee-row-cnt">
                            {data.mons.slice(6).map((it, idx) => {
                                return genMonIt(it, idx)
                            })}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <SubBtn clickFn={this.goPay.bind(this)} title="前往缴费"></SubBtn>
                </div>
                <div className="row">
                    <div className="tips">
                        注意：<br/>
                        请按时缴纳每月党费，连续超过6个月未缴党费者，将视为自动退党
                    </div>
                </div>
                <DatePicker
                    showFormat="YYYY"
                    dateFormat={["YYYY"]}
                    value={this.state.time}
                    isOpen={this.state.isOpen}
                    onSelect={this.handleSelect.bind(this)}
                    onCancel={e => this.handleCancel()}
                />
            </div>
        )
    }
}