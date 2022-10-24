import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { publicRoutes } from '../../router';

const AppRouter = () => {
	return (
		<Switch>
			{publicRoutes.map(route =>
				<Route
					component={route.component}
					path={route.path}
					exact={route.exact}
					key={route.path}
				/>
			)}
			<Redirect to='/login' />
		</Switch>
	)
}

export default AppRouter
