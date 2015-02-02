import Ember from 'ember';

export default Ember.Route.extend({

model: function(params) {
  var id = params.subreddit_id;
  return Ember.$.getJSON('http://www.reddit.com/r/' + id + '.json',
  function(res) {
    // console.log(res.data.children);
    return res.data.children;
  });
}

});
