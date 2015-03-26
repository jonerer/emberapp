# for more details see: http://emberjs.com/guides/models/defining-models/

Emberapp.Session = DS.Model.extend
  name: DS.attr 'string'
  password: DS.attr 'string'
