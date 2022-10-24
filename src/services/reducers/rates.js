import { 
	RATES_REQUEST, 
	RATES_REQUEST_FAILED, 
	RATES_REQUEST_SUCCESS 
} from "../action-types";

const ratesInitialState = {
	base: '',
	rates: {},
	ratesFailed: false,
	ratesSuccess: false,
	ratesRequest: false
};

export const ratesReducer = (state = ratesInitialState, action) => {
	switch (action.type) {
		case RATES_REQUEST: {
			return {
				...state,
				ratesFailed: false,
				ratesSuccess: false,
				ratesRequest: true
			};
		}
		case RATES_REQUEST_FAILED: {
			return {
				...state,
				ratesFailed: true,
				ratesSuccess: false,
				ratesRequest: false
			};
		}
		case RATES_REQUEST_SUCCESS: {
			return {
				...state,
				ratesFailed: false,
				ratesSuccess: true,
				ratesRequest: false,
				base: action.playload.base,
				rates: action.playload.rates,
			};
		}
		default: {
			return state;
		}
	}
};