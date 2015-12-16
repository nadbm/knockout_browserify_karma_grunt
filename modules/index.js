'use strict';
var ko = require('knockout');
var ViewModel = require('./import');

// Here's my data model
ko.applyBindings(new ViewModel("Planet", "Earth")); 