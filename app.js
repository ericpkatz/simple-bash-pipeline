var fns = {
  delay: function(input, args, done){
     setTimeout(function(){
       done(input);
     }, args[0]*1);
  },
  set: function(input, args, done){
    done(args[0]*1);
  },
  mult: function(input, args, done){
    var result = args.reduce(function(memo, arg){
      memo = memo * arg*1;
      return memo;
    }, input);
    done(result);
  },
  add: function(input, args, done){
    var result = args.reduce(function(memo, arg){
      memo = memo + arg*1;
      return memo;
    }, input);
    done(result);
  }
};

var pipeline = require('./pipeline')(fns);

var str = 'set 5 | delay 500 | mult 3 2 | add 12';

pipeline(str, function(result){
  console.log(result);
}, 5);
