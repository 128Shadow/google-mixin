import Ember from 'ember';
import GoogleMapMixin from 'google-mixin/mixins/google-map';
import { module, test } from 'qunit';

module('Unit | Mixin | google map');

// Replace this with your real tests.
test('it works', function(assert) {
  let GoogleMapObject = Ember.Object.extend(GoogleMapMixin);
  let subject = GoogleMapObject.create();
  assert.ok(subject);
});
