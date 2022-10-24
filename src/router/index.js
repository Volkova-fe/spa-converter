import Convert from "../pages/convert/convert";
import Rates from "../pages/rates/rates";

export const publicRoutes = [
	{ path: '/', component: Convert, exact: true },
	{ path: '/rates', component: Rates, exact: true },
]