/*global unexpected:true*/
unexpected = require('unexpected').clone();
unexpected.use(require('./lib/unexpected-set'));
unexpected.output.preferredWidth = 80;

require('es6-set/implement');
