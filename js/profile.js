import Ractive from 'ractive'
import template from '../views/profile.html'

var Profile = Ractive.extend({  
    isolated: true,
    template
});

export default Profile  