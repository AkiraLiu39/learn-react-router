import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Main = () => <h2>主页</h2>

const Redbull = () => <h2>红牛</h2>

const Snacks = ({ routes }) => (
  <div>
    <h2>小吃</h2>
    <ul>
      <li><Link to="/snacks/spicy">辣条</Link></li>
      <li><Link to="/snacks/chips">薯片</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const Spicy = () => <h3>辣条</h3>
const Chips = () => <h3>薯片</h3>

const routes = [
	{
		path:'/redbull',
		component:Redbull
	},
	{
		path:'/snacks',
		component:Snacks,
		routes:[
			{
				path:'/snacks/spicy',
				component:Spicy
			},
			{
				path:'/snacks/chips',
				component:Chips
			}
		]
	}
]
const RouteWithSubRoutes =(route)=>(
	<Route path={route.path} render={(props)=>(
		<route.component {...props} routes={route.routes} />
	)} />
)

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/snacks">小吃</Link></li>
        <li><Link to="/redbull">红牛</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default RouteConfigExample