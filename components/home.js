import React from 'react'
import url from '../img/main.jpg'

class Home extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<h1>Home组件</h1>
				<img src={url}/>
				<hr/>
			</div>
		)
	}
}
export default Home;
