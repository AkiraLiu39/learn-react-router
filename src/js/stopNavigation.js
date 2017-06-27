import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Prompt
} from 'react-router-dom'

const PreventingTransitionsExample = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">表单</Link></li>
				<li><Link to="/one">页面1</Link></li>
				<li><Link to="/two">页面2</Link></li>
			</ul>
			<Route path="/" exact component={Form} />
			<Route path="/one" render={()=>(<h3>页面1</h3>)} />
			<Route path="/two" render={()=>(<h3>页面2</h3>)} />
		</div>
	</Router>
)

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isBlocking : false
		};
	}

	render(){
		const {isBlocking} = this.state;

		return (
			<form onSubmit={event=>{
				event.preventDefault();
				event.target.reset();
				this.setState({isBlocking:false})
			}}>
			<p>{isBlocking ? '不可以正常跳转':'可以正常跳转'}</p>
			<Prompt when={isBlocking} message={location => (`真的要跳转到${location.pathname}么？`)} />
			<p>
				<input 
					size = '50'
					placeholder= '输入内容后就不能正常跳转了'
					onChange = {event =>{
						this.setState({isBlocking:event.target.value.length > 0});
					}}/>
			</p>
			<p><button>提交表单后正常跳转</button></p>
			</form>
		);
	}
}

export default PreventingTransitionsExample;

