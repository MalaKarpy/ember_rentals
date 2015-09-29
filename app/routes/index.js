import Ember from 'ember';
//var rentals = [];

// var rentals = [{
//   id:1,
//   owner:"Veruca Salt",
//   city:"Nellore",
//   type:"Estate",
//   bedrooms:10,
//   image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
//
// },{
//   id: 2,
//   owner: "Mike TV",
//   city: "Seattle",
//   type: "Condo",
//   bedrooms: 1,
//   image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
// }, {
//   d: 3,
//   owner: "Violet Beauregarde",
//   city: "Portland",
//   type: "Apartment",
//   bedrooms: 3,
//   image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
// }];
//

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rentals');
  },
  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rentals', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    update(rental,params) {
      debugger;
      Object.keys(params).forEach(function(key) {
         if(params[key]!==undefined) {
           rental.set(key,params[key]);
         }
       });
      rental.save();
      this.transitionTo('index');
    }
  }
});
