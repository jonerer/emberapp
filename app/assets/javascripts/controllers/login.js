//# For more information see: http://emberjs.com/guides/routing/
// http://www.toptal.com/emberjs/a-thorough-guide-to-ember-data

Emberapp.LoginController = Ember.Controller.extend({
    actions: {
        sendit: function() {
            var obj = {
                name: this.get('name'),
                pass: this.get('pass')
            }
            Emberapp.set('user', "fnissarn + " + obj.name)
            var that = this
            window.redirect = function(kek) {
                that.transitionToRoute(kek)
            }
            Ember.$.post('/sessions', obj).then(function(data) {
                redirect("index")
                console.log(Emberapp.get('user'))
                console.log(this)
                if (data.status) {
                    console.log('success!', data)
                } else {
                    console.log('fail!', data)
                }
            })
        }
    }
})