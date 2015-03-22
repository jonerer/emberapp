# for more details see: http://emberjs.com/guides/models/defining-models/

Emberapp.Post = DS.Model.extend
  title: DS.attr 'string'
  text: DS.attr 'string'
  userId: DS.attr 'number'
