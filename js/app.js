import Ractive from 'ractive'
import template from '../views/app.html'
import Search from './search'
import HomePage from './homePage'
import UserPage from './userPage'
import Router from './router'

const app = new Ractive( {
	el: '#app',
	template,
	components: {
		Router,
		Search,
		HomePage,
		UserPage
	},
	data: {
		componentName: 'HomePage'
	}
} )

export default app
