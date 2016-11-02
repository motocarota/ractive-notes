import Ractive from 'ractive'
import template from '../views/app.html'

const app = new Ractive( {
	el: '#app',
	template,
	data: {
		name: 'world'
	}
} )

export default app
