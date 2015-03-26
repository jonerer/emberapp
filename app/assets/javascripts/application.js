//= require jquery
//= require jquery_ujs
//= require ember
//= require ember-data
//= require_self
//= require emberapp

// for more details see: http://emberjs.com/guides/application/
window.Emberapp = Ember.Application.create({
    ready: function() {
        this.set('readyz', "fdniss")
    }
})

