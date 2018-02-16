var countdownGenerator = function(x) {
    /* your code here */
    var counter = x + 1;

    return function() {
        counter--;
        if (counter > 0) {
            return "T-minus " + counter + "!";
        }
        if (counter === 0) {
            return "Blast Off!"
        }
        if (counter < 0) {
            return "Rockets already gone, bub!";
        }
    }
}

var countdown = countdownGenerator(5);


console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!