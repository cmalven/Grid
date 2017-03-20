var Clipboard = require('clipboard');
var notie = require('notie');

//
//   Global App Variable
//
//////////////////////////////////////////////////////////////////////

window.APP = window.APP || {};


//
//   App Initiation
//
//////////////////////////////////////////////////////////////////////

APP.init = function() {
  notie.setOptions({
    colorSuccess: '#20f0bc',
    colorError: '#fe0044'
  })

  var clipboard = new Clipboard('.js-item', {
    text: function(trigger) {
      return trigger.getAttribute('data-code');
    }
  });

  clipboard.on('success', function(e) {
    notie.alert('success', 'The code was copied to your clipboard.', 2);
  });

  clipboard.on('error', function(e) {
    notie.alert('error', 'Your browser might not support copying to the clipboard.', 3);
  });
};


//
//   Kickoff
//
//////////////////////////////////////////////////////////////////////

APP.init();
