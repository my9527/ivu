
/**
 * Created by my on 2018-04-11
 *
 * 页面容器，针对部分顶部tab 可以隐藏的浏览器，做到动态自适应 
 */

import React from 'react';
import _ from 'lodash';

const  pageWrapper = (Cmpt)=>{

	return class extends React.Component {

		constructor(props){
			super(props);
			this.state = {
				win: this.getWinInfo(window)
			}
			// 防止屏幕变化太快 多次调用这个函数
			this.onWindowResize = _.debounce(this.onWindowResize.bind(this), 100);
		}


		/**
		 * 解析窗口信息
		 * @param  window 窗口对象
		 * @return {[type]}
		 */
		getWinInfo(win){
			const {availHeight, availWidth, pixelDepth} = win.screen;
			return  {
					height: availHeight,
					width: availWidth,
					orientation: window.screen.orientation.angle,
					pixel: pixelDepth

				}
		}

		/**
		 * 窗口 大小变化的时候 更新状态
		 * @return 
		 */
		onWindowResize(){
			console.log('window resize');
			this.setState({
				win: this.getWinInfo(window)
			})

		}

		componentDidMount(){
			window.addEventListener('resize', this.onWindowResize);
		}

		componentWillUnmount(){
			window.removeEventListener('resize', this.onWindowResize);
		}

		render(){
			return <Cmpt {...this.props} win={this.state.win} />
		}
	}
}


export default pageWrapper;