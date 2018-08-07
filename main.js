import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory,IndexRoute,IndexRedirect} from 'react-router'
import App from './components/app'
import Home from './components/home'
import About from './components/about'
import Other from './components/other'

import './css/base.css'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
//			<IndexRoute component={Home}/>
			<IndexRedirect to="/home"/>
			<Route path="/home" component={Home}></Route>
			<Route path="/about" component={About}></Route>
			<Route path="/other" component={Other}></Route>
		</Route>
	</Router>
	,document.getElementById('out'))
