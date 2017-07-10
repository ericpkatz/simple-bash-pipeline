module.exports = function(fns){
  function pipeline(str, done, current){
    if(str === ''){
      return done(current);
    }
    var commands = str.split('|');
    var command = commands[0].trim();
    var parts = command.split(' ');
    var name = parts[0].trim();
    var args = parts.slice(1);
    var fn = fns[name];
    fn(current, args, function(result){
      pipeline(commands.slice(1).join('|').trim(), done, result);
    });
  }
  return pipeline;
}
