import getRates from "../../API/Currency";
import {
	RATES_REQUEST,
	RATES_REQUEST_FAILED,
	RATES_REQUEST_SUCCESS
} from "../action-types";

export function getData() {
	return function (dispatch) {
		dispatch({
			type: RATES_REQUEST
		});
		getRates()
			.then((res) => {
				dispatch({
					type: RATES_REQUEST_SUCCESS,
					playload: res,
				});
			})
			.catch(() => {
				dispatch({
					type: RATES_REQUEST_FAILED,
				});
			})
	};
}