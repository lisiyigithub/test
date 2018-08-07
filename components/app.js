import React from 'react'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class App extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	
	render(){		
		return(
			<div>
				<h1>react-router</h1>
				<Link to="/home">首页</Link>
				<Link to="/about">关于</Link>
				<Link to="/other">其他</Link>
				
				<div>
					{this.props.children}
				</div>
				
			</div>
		)
	}
}

export default App;
