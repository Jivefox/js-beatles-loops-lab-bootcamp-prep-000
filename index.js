function theBeatlesPlay(musicians, instruments) {
  var empty = [ ];
  for (let i = 0; i < 4; i++) {
      empty.push (`${musicians[i]} plays ${instruments[i]}`);
  }
      return empty;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    i++;
    facts[i] = facts[i] + '!!!'
}
return facts;
}

function iLoveTheBeatles(n) {
  
}