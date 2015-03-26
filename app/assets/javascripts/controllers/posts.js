
App.PostsNewController = Ember.Controller.extend({
    actions: {
        subba: function() {
            var newRecord = this.store.createRecord('post',
                { title: this.get('title'),
                text: this.get('text')
                })

            console.log(newRecord)
            newRecord.save()
            return false;
        }
    }
})