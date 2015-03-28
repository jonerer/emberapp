# for more details see: http://emberjs.com/guides/models/defining-models/

App.Session = DS.Model.extend
  name: DS.attr 'string'
  password: DS.attr 'string'
