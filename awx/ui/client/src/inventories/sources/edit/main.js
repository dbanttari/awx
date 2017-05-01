/*************************************************
 * Copyright (c) 2017 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import buildSourcesEditState from './build-sources-edit-state.factory';
import controller from './sources-edit.controller';

export default
angular.module('sourcesEdit', [])
    .factory('buildSourcesEditState', buildSourcesEditState)
    .controller('SourcesEditController', controller);
