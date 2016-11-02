import Ractive from 'ractive'
import page from 'page'

function navigationHandler(routeHandler, onNavigation) {  
    return (context/*, next*/) => {
        routeHandler(context, (error, PageComponent = {}, data = {}) => {
            context.pageName = PageComponent._name
            context.state = data
            onNavigation(error, context)
        })
    }
}

export function init(routes, onNavigation) {

    routes.forEach((routeHandler, path) => {
        page(path, navigationHandler(routeHandler, onNavigation))
    })

    page({
        hashbang: true
    })
}

export function navTo(url) {  
    page.show(url)
}

const Router = Ractive.extend({  
    template: '<router-handler/>',
    components: {
        'router-handler': function() {
            return this.get('componentName')
        }
    },
    oninit: function() {
        this.observe('componentName', function(newValue, oldValue) {
            if (this.fragment.rendered) {
                this.reset()
            }
        })
    }
})
export default Router