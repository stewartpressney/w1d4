// The second argument/parameter is expected to be a function
var findWaldo = function(arr, found) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Waldo") {
            found(i); // execute callback
            //console.log("Found Waldo at index " + [i] + "!");
        }
    }
}

function actionWhenFound(index) {
     console.log("Found Waldo at index " + index + "!");

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);