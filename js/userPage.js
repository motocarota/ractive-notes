import Ractive from 'ractive'
import template from '../views/userPage.html'  
import Profile from './profile'  
import Repos from './repos'  
import Notes from './notes'

var UserPage = Ractive.extend({  
    template,
    components: {
        Profile,
        Repos,
        Notes
    }
});

export default UserPage