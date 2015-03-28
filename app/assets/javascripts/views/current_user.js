App.CurrentUserView = Ember.View.extend({
    shown: { name: 'loading...' },

    user: function() {
        this.set('shown', App.get('user'))
    }.observes('App.user').on('init'),
    // fuckin' works!

    templateName: 'current_user',
    tagName: 'span'
})
