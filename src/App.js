import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './reduxs/userData'
import api from './api';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import ExitsUser from './Components/Users/ExitsUser/ExitsUser'
import NotFound from './Components/NotFound/NotFound'
import Queue from './Components/Users/Queue/Queue';
import MoneyMovement from './Components/Money/MoneyMovement/MoneyMovement';
import CurrentMoney from './Components/Money/CurrentMoney/CurrentMoney';
import MonthlyPayment from './Components/Money/MonthlyMoney/MonthlyMoney';
import Calender from './Components/Calender/Calender';
import JustTheMonth from './Components/Money/MonthlyMoney/JustTheMonth/JustTheMonth';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/portfolio/home') {
			api.get('getuser', {
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(res => {
				dispatch(setUser({name: res.data.name, username: res.data.username, group: res.data.group, email: res.data.email, password: res.data.password}))
			})
			.catch(err => {
				if (err.response.status === 401) {
					localStorage.removeItem('token')
					navigate('/portfolio');
				}
			})
		}
	}, [location]);

	return (
		<Routes>
			<Route path='/portfolio' element={<Portfolio />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/users/users' element={<ExitsUser />} />
			<Route path='/users/queue' element={<Queue />} />
			<Route path='/money/moneymovement' element={<MoneyMovement />} />
			<Route path='/money/currentmoney' element={<CurrentMoney />} />
			<Route path='/money/monthlypayment' element={<MonthlyPayment />} />
			<Route path='/money/monthlypayment/:queryid' element={<JustTheMonth />} />
			<Route path='/projects/users' element={<NotFound />} />
			<Route path='/projects/users2' element={<NotFound />} />
			<Route path='/projects/users3' element={<NotFound />} />
			<Route path='/calender' element={<Calender />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
