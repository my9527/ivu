import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Bundle from './components/Bundle';
import ErrorPage from './pages/404';

import HomePage from './pages/home';
import FeePage from './pages/fee';
import PayPage from './pages/pay/pay';
import PayResultPage from './pages/pay/payResult';
import PayDetailPage from './pages/pay/payDetail';
import ListPage from './pages/list';


const routes = [{
    path: '/home',
    component: (props) => {
        return <HomePage {...props}/>
    }
}, {
    path: '/fee',
    component: (props) => {
        return <FeePage {...props}/>
    }
}, {
    path: '/pay',
    component: (props) => {
        return <PayPage {...props}/>
    }
}, {
    path: '/payRslt',
    component: (props) => {
        return <PayResultPage {...props}/>
    }
}, {
    path: '/list',
    component: (props) => {
        return <ListPage {...props}/>
    }
}, {
    path: '/payDetail',
    component: (props) => {
        return <PayDetailPage {...props} />
    }
}];

const root = () => {
    return <Redirect to='/home'/>
}

// 统一路由注册
class RootRouter extends Component {

    componentDidMount(props) {
        this.props.history.listen(loc => {
            console.log(loc, 'dd')
        })
    }

    render() {

        return (
            <Switch>
                <Route exact path='/' component={root}/>
                {routes.map((route, idx) => {
                    return <Route key={idx} path={route.path} component={route.component}/>
                })}
            </Switch>
        )
    }
}


export default () => {
    return (
        <Router>
            <Route key={'jj'} component={RootRouter}/>
        </Router>
    )
}