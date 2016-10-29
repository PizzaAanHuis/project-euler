function euler1(nbrInput) {

nbrInput = Math.min(nbrInput, 1000);
var sum = 0;
  //alert (5%3);
    for (var i = 0; i < nbrInput; i++) {

        if (i%3 === 0 || i%5 === 0) {
          sum = sum + i;
        }
    }
    document.getElementById("resultCalc1").innerHTML = sum;
}
