import Ractive from 'ractive'
import template from '../views/app.html'
import Search from './search'
import HomePage from './homePage'
import UserPage from './userPage'

const app = new Ractive( {
	el: '#app',
	template,
	components: {
		Search,
		HomePage,
		UserPage
	}
} )

export default app
