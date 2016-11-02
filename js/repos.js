import Ractive from 'ractive'  
import template from '../views/repos.html'

var Repos = Ractive.extend({  
    isolated: true,
    template
});

export default Repos