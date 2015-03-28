//= require jquery
//= require jquery_ujs
//= require ember
//= require ember-data
//= require_self
//= require emberapp

// for more details see: http://emberjs.com/guides/application/
window.App = Ember.Application.create({
})

// http://ember.zone/ember-application-initializers/
Ember.Application.initializer({
    name: "initializerName",

    initialize: function(container, application) {
        var store = container.lookup('store:main')

        var that = this
        App.$.get('/users/me').then(function(data) {
            var me = store.push('user', data.user)
            application.set('user', me)
        })
    },

    after: 'store'
});

