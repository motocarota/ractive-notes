import Ractive from 'ractive'
import template from '../views/app.html'
import SearchUser from './search-user'
import Home from './home'

const app = new Ractive( {
	el: '#app',
	template,
	components: {
		SearchUser,
		Home
	}
} )

export default app
