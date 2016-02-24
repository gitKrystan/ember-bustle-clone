import Ember from 'ember';

export default Ember.Component.extend({
  newArticleFormIsShowing: false,
  currentContent: "Type content to see live preview",
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
        content: this.get('content'),
        timestamp: new Date().getTime()
      };
      this.set('newArticleFormIsShowing', false);
      this.sendAction('saveNewArticle', params);
    },

    updateCurrentContent() {
      this.set('currentContent', this.get('content'));
      console.log(this.get('currentContent'));
    }
  }
});
