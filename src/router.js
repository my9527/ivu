

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Bundle from './components/Bundle';
import ErrorPage from './pages/404';


const routes = [{
	path: '/home',
	component: (props)=>{
	 return	<Bundle load={() => import('./pages/Home')}>
        {(Cmpt) => <Cmpt {...props}/>}
    </Bundle>
	}
},{
	path: '/test',
	component: (props)=>{
	 return	<Bundle load={() => import('./pages/Test')}>
        {(Cmpt) => <Cmpt {...props}/>}
    </Bundle>
	}
},{
  path: '/pay',
  component: (props)=>{
    return	<Bundle load={() => import('./pages/pay/pay')}>
      {(Cmpt) => <Cmpt {...props}/>}
    </Bundle>
  }
},{
  path: '/payRslt',
  component: (props)=>{
    return	<Bundle load={() => import('./pages/pay/payResult')}>
      {(Cmpt) => <Cmpt {...props}/>}
    </Bundle>
  }
},{
  path: '/list',
  component: (props)=>{
    return	<Bundle load={() => import('./pages/list')}>
      {(Cmpt) => <Cmpt {...props}/>}
    </Bundle>
  }
},{
  path: '/payDetail',
  component: (props)=>{
    return	<Bundle load={() => import('./pages/pay/payDetail')}>
      {(Cmpt) => <Cmpt {...props}/>}
    </Bundle>
  }
}];

const root = ()=>{
	return	<Redirect to='/home' />
}

// 统一路由注册
class RootRouter extends Component {
	
	componentDidMount(props){
		this.props.history.listen(loc=>{
			console.log(loc, 'dd')
		})
	}

	render(){

		return (
			<Switch>
					<Route exact path='/' component={root} />
					{routes.map((route, idx)=>{
						return <Route key={idx} path={route.path} component={route.component} />
					})}
			</Switch>
		)
	}
}


export default ()=>{
	return (
		<Router>
				<Route key={'jj'} component={RootRouter} />
		</Router>
	)
}