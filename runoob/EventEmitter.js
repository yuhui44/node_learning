// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();

// event.on('some_event', function(){
//   console.log('some_event事件触发');
// })

// setTimeout(function(){
//   event.emit('some_event');
// }, 1000);


var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2){
  console.log('listener1', arg1, arg2);
})
emitter.on('someEvent', function(arg1, arg2){
  console.log('listener2', arg1, arg2);
})
emitter.emit('someEvent', 'arg1参数', 'arg2参数');
