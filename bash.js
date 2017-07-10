var fs = require('fs');

var fns = {
  cat: function(input, args, done){
    fs.readFile(args[0], function(err, data){
      done(data.toString());
    });
  },
  echo: function(input, args, done){
    done(args.join(' '));
  },
  wc: function(input, args, done){
    done(input.split(' ').length);
  }
};

var pipeline = require('./pipeline')(fns);

process.stdout.write('prompt >');

process.stdin.on('data', function (data) {
  var str = data.toString().trim();
  pipeline(str, function(result){
    process.stdout.write(result.toString());
    process.stdout.write('\nprompt >');
  }, null);
});
