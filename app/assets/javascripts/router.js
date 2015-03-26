//# For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
    this.resource('posts', function() {
        this.resource('post', { path: '/:post_id'})
        this.route('new')
    })
    this.resource('users')
})

App.PostsRoute = Ember.Route.extend({
    model: function() {
        return {
            posts: this.store.find('post')
        }
    }
})

App.UsersRoute = Ember.Route.extend({
    model: function() {
        return {
            users: this.store.find('user'),
            posts: this.store.find('post')
        }
    }
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('posts');
    }
});

//App.PostsNewRoute = Ember.Route.extend({
//    model: function() {
//        //return this.store.find('post', 1)
//        return this.store.createRecord('post',
//            {
//                title: "random title",
//                text: "doit"
//            })
//    }
//})