import Ractive from 'ractive'
import template from '../views/search.html'

const Search = Ractive.extend({
    isolated: true,
    template,

    oninit() { 
        this.on('searchUser', (ev) => { 
            
            //stop event propagation (1)
            ev.original.preventDefault()
            const username = ev.get( 'query' )
            console.info("looking for", username)
            //stop event propagation (2)
            // return false
        })
    },

    data: {
        query: ''
    }
})

export default Search