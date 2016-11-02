import Ractive from 'ractive'  
import template from '../views/notes.html'

var Notes = Ractive.extend({  
    isolated: true,
    template
});

export default Notes  