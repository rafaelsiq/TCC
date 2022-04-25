const Users = require('./Users');
const Payments = require('./Payments');

module.exports = Streamers = () => {
	return {
		paymentType: Payments(),
		linkAd: String,
		cpf: String,
		public: String,
		...Users()
	}
}