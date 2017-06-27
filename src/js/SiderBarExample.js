import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const routes = [
	{
		path:'/',
		exact:true,
		siderbar:()=>(<div>主页!</div>),
		main:()=>(<div>内容：主页</div>)
	},
	{
		path:'/about',
		siderbar:()=>(<div>关于!</div>),
		main:()=>(<div>内容：关于</div>)
	},
	{
		path:'/contact',
		siderbar:()=>(<div>联系我们!</div>),
		main:()=>(<div>内容：联系我们</div>)
	}
]

const SiderbarExample = () =>(
	<Router>
		<div style={{display:'flex'}}>
			<div style={{padding:'10px',width:'100px',background:'#f0f0f0'}}>
				<ul style={{listStyleType:'none',padding:0}}>
					 <li><Link to="/">主页</Link></li>
			          <li><Link to="/about">关于我们</Link></li>
			          <li><Link to="/contact">联系我们</Link></li>
				</ul>
				{routes.map(({path,exact,siderbar},index)=>(
					<Route key={index} path={path} exact={exact} component={siderbar} />
				))}
			</div>
			
			<div style={{flex:1,padding:'10px'}}>
				{routes.map(({path,exact,main},index)=>(
					<Route key={index} path={path} exact = {exact} component={main}/>
				))}
			</div>
			
			

		</div>
	</Router>
)

export default SiderbarExample