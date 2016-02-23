import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  actions: {
    saveNewArticle(params) {
      debugger;
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
    }
  }
});
