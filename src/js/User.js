import userIcon from '../images/icons/user.svg';
import style from '../style.scss';



export class User {
	#privateField = '123'

	constructor(userName = '') {
		this.userName = userName;
		process.env.API_URL
	}

	getFullName() {
		return this.userName;
	}
}