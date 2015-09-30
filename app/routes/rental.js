import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rentals', params.rental_id);
  },

  actions: {
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
         if(params[key]!==undefined) {
           rental.set(key,params[key]);
         }
       });
      //rental.save();
      this.sendAction('update', rental, params);
    }
  }


});
