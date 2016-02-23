import Ember from 'ember';

export default Ember.Component.extend({
  newArticleFormIsShowing: false,
  actions: {
    showNewArticleForm() {
      this.set('newArticleFormIsShowing', true);
    },
    saveNewArticle() {
      var params = {
        title: this.get('title'),
        category: this.get('category'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content')
      };
      this.set('newArticleFormIsShowing', false);
      this.sendAction('saveNewArticle', params);
    }
  }
});