// imports
import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	useHistory,
} from 'react-router-dom';
import { PostProvider } from './PostContext';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Login from './components/Login';
import Register from './components/Register';
import Post from './components/Post';

// utils
import { getJWT } from './utils';

function App() {
	const history = useHistory();

	const LoginContainer = () => {
		return (
			<div>
				<Route path="/login" component={Login} />
			</div>
		);
	};

	const RegisterContainer = () => {
		return (
			<div>
				<Route path="/register" component={Register} />
			</div>
		);
	};

	const LogoutContainer = () => {
		localStorage.removeItem('auth');
		return <Redirect to="/login" />;
	};

	const ProtectedRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) =>
				!getJWT() ? <Redirect to="/login" /> : <Component {...props} />
			}
		/>
	);

	const DefaultContainer = () => {
		return (
			<div>
				<Nav />
				<ProtectedRoute path="/" exact component={Blog} />
				<ProtectedRoute path="/blog" exact component={Blog} />
				<ProtectedRoute path="/blog-detail/:id" component={BlogDetail} />
				<ProtectedRoute path="/blog/category/:category" component={Blog} />
				<ProtectedRoute path="/post" exact component={Post} />
				<Footer />
			</div>
		);
	};

	return (
		<PostProvider>
			<Router>
				<Switch>
					<Route exact path="/login" component={LoginContainer} />
					<Route exact path="/register" component={RegisterContainer} />
					<Route exact path="/logout" component={LogoutContainer} />
					<Route component={DefaultContainer} />
				</Switch>
			</Router>
		</PostProvider>
	);
}

export default App;
