import React, { useEffect, useState } from 'react';
import fx from 'money';
import _ from 'lodash';
import {
	FormControl,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	TableHead,
	Paper,
	Typography
} from '@mui/material';
import { getData } from '../../services/actions/rates';
import { useDispatch, useSelector } from 'react-redux';

const Rates = () => {
	const dispatch = useDispatch();
	const { base, rates } = useSelector(state => state.rates)
	const [names, setNames] = useState([]);
	const [ratesInfo, setRatesInfo] = useState([]);
	const [currencyBase, setCurrencyBase] = useState('');

	useEffect(() => {
		setCurrencyBase(navigator.language === 'ru' ? 'RUB' : 'USD');
		calculate(currencyBase);
	}, [rates])


	useEffect(() => {
		dispatch(getData());
		setRatesInfo(Object.entries(rates));
		setNames(Object.keys(rates));
		fx.base = currencyBase;
		fx.rates = rates;
	}, [base]);

	const calculate = (value) => {
		const result = names.map((name) => {
			const rate = _.round(fx(1).convert({ from: value, to: name }), 3);
			return [name, rate];
		});
		setRatesInfo(result);
	};

	const changeBase = (e) => {
		const { value } = e.target;
		setCurrencyBase(value);
		calculate(value);
	};

	return (

		<div>
			<Typography pl={2} variant="subtitle2" gutterBottom>Базовая валюта</Typography>
			<FormControl variant='outlined'>
				<Select native onChange={changeBase} value={currencyBase}>
					{names.map((name) => <option key={name}>{name}</option>)}
				</Select>
			</FormControl>
			<TableContainer sx={{ minWidth: 280, maxWidth: 310 }} component={Paper}>
				<Table sx={{ minWidth: 280, maxWidth: 310 }} aria-label="caption table">
					<TableHead>
						<TableRow>
							<TableCell>Текущий курс валюты</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ratesInfo.map(([name, rate]) =>
							name === 'RUB' || name === 'USD' || name === 'EUR'  ?
								(name !== currencyBase && rate > 0 ?
									<TableRow key={name}>
										<TableCell component="th" scope="row">
											1 {currencyBase} = {_.round((1 / rate), 2)} {name}
										</TableCell>
									</TableRow> : '')
								: '')}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default Rates
