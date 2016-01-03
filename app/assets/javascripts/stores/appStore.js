// // var assign = require('object-assign')
//
// var CHANGE_EVENT = 'change';
//
// var AppStore = assign({}, EventEmitter.prototype, {
//   // built in function emitChange
//   emitChange: function() {
//     this.emit(CHANGE_EVENT);
//   }
// });
//
// AppDispatcher.register(function(payload) {
//   console.log(payload);
//   return true;
// })
