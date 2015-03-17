'use strict';

angular.module('goRemote.version', [
  'goRemote.version.interpolate-filter',
  'goRemote.version.version-directive'
])

.value('version', '0.1');
