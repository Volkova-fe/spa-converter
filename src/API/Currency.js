import axios from "axios";

const getRates = async () => {
	const response = await axios.get('https://openexchangerates.org/api/latest.json?app_id=f16349fed582473d9814031abd0ec288');
	return response.data;
};

export default getRates;