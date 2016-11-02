import router from './router'  
import HomePage from './homePage'  
import UserPage from './userPage'

let routes = new Map()

routes.set('/', (context, next) => next(null, HomePage) )
routes.set('/user/:username', (context, next) => next(null, UserPage) )

export default routes