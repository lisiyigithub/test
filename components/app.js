import React from 'react'
import Home from './home'

class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className="top">
				<h1>父组件</h1>
				<hr/>
				<Home/>
			</div>
		)
	}
}
export default App;
