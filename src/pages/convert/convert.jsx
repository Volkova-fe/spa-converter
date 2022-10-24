import React, { useEffect, useState } from 'react';
import style from './convert.module.css';
import fx from 'money';
import _ from 'lodash';
import { Paper, TextField, FormControl, Select, Typography } from "@mui/material";
import getRates from '../../API/Currency';


const Convert = () => {
    const [names, setNames] = useState([]);
    const [currencyFrom, setCurrencyFrom] = useState('RUB');
    const [currencyTo, setCurrencyTo] = useState('USD');
    const [valueFrom, setValueFrom] = useState(1);
    const [valueTo, setValueTo] = useState(0);

    const calculate = (value, nameFrom, nameTo) => {
        const result = _.round(fx(value).convert({ from: nameFrom, to: nameTo }), 2);
        setValueTo(result);
    };

    useEffect(() => {
        const getData = async () => {
            const { base, rates } = await getRates();
            setNames(Object.keys(rates));
            fx.base = base;
            fx.rates = rates;
            calculate(0, 'RUB', 'USD');
        };
        getData();
    }, []);

    const changeNameFrom = (e) => {
        const name = e.target.value;
        setCurrencyFrom(name);
        calculate(valueFrom, name, currencyTo);
    };
    const changeNameTo = (e) => {
        const name = e.target.value;
        setCurrencyTo(name);
        calculate(valueFrom, currencyFrom, name);
    };
    const changeValueFrom = (e) => {
        const { value } = e.target;
        setValueFrom(value);
        calculate(value, currencyFrom, currencyTo);
    };
    return (
        <div>
            <Paper className={style.paper}>
                <Typography variant="h5" gutterBottom>
                    Конвертер валют
                </Typography>
                <form>
                    <div>
                        <TextField
                            sx={{ minWidth: 100, maxWidth: 150 }}
                            variant='outlined'
                            onChange={changeValueFrom}
                            value={valueFrom}
                        />
                        <FormControl className={style.dropdown} variant='outlined'>
                            <Select
                                native
                                onChange={changeNameFrom}
                                value={currencyFrom}
                            >
                                {names.map((name) => <option key={name}>{name}</option>)}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            sx={{ minWidth: 100, maxWidth: 150 }}
                            variant='outlined'
                            value={valueTo}
                            disabled
                        />
                        <FormControl className={style.dropdown} variant='outlined'>
                            <Select
                                native
                                onChange={changeNameTo}
                                value={currencyTo}
                            >
                                {names.map((name) => <option key={name}>{name}</option>)}
                            </Select>
                        </FormControl>
                    </div>
                </form>
            </Paper>
        </div>
    );
};

export default Convert;