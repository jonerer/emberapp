//# For more information see: http://emberjs.com/guides/routing/

Emberapp.Router.map(function() {
    this.resource('posts')
    this.resource('users')
})

Emberapp.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return {
            hej: 2
        }
    }
})

Emberapp.UsersRoute = Ember.Route.extend({
    model: function() {
        return {
            users: this.store.find('user'),
            posts: this.store.find('post')
        }
    }
});