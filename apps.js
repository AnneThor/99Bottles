var beers;

function howManyBottlesOfBeer() {
  if (beers == undefined) {
    beers = 99;
    document.getElementById("beerBottles").innerHTML = "There are " + beers + " beers on the wall.";
    console.log(beers);
  } else {
    beers--;
    document.getElementById("beerBottles").innerHTML = "There are " + beers + " beers on the wall";
  }
}

function reset() {
  beers = undefined;
  document.getElementById("beerBottles").innerHTML = "There are no beers on the wall.";
}
