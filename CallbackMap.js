var words = ["ground", "control", "to", "major", "tom"];

//expected result: [6, 7, 2, 5, 3]
var resultA = words.map( word => {
    var modifiedA = word.length;
    return modifiedA
});


//expected result:[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
var resultB = words.map( word => {
    var modifiedB = word.toUpperCase();
    return modifiedB
});

//expected result: [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
var resultC = words.map( word => {
    var modifiedC = word.split('').reverse().join('');
    return modifiedC
  });

console.log(resultA);
console.log(resultB);
console.log(resultC);