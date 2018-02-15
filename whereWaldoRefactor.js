// The second argument/parameter is expected to be a function
var findWaldo = function(arr, found) {
  arr.forEach(function(element, i){
    if (arr[i] === "Waldo") {
      found();
    }
  });
}

function actionWhenFound(name) {
  console.log("Found Waldo");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

