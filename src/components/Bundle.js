

/**
 * Created by my on 2018-04-11
 * 异步加载组件
 * 
 */

import React from 'react';
import pageWrapper from './pageWrapper';


export default class Bundle extends React.Component {

	state = {
		mod: null
	}

    componentWillMount() {
        this.load(this.props)
    }

    load(props) {
    	
        //注意这里，使用Promise对象; mod.default导出默认
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod ? this.props.children(pageWrapper(this.state.mod || <div></div>)) : null;
    }
}