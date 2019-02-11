
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import axios
import axios from 'axios';
/*
  Put the JavaScript code you want below.
*/

let getBeer = async () => {
  try {
    let importBeer = await axios.get('https://api.punkapi.com/v2/beers')
    return importBeer;
    console.log(importBeer);
  } catch (error) {
    console.error(error);
  }
}

let addBeer = async () => {
  let beerBatch = await getBeer();
  console.log(beerBatch);
  let beerBox = document.querySelector(".beerCase");
  for (let i = 0 ;  i < beerBatch.data.length ; i++){
    console.log("loop control");
    let beerItem = document.createElement("div");
    beerItem.setAttribute("class", "beerTag");
    beerBox.appendChild("beerItem");
    let beerName = document.createElement("h5");
    beerName.innerText = "beerBatch.data.name[i]"; // fill with name from api
    let beerTagLine = document.createElement ("p");
    beerTagLine.innerText = "beerBatch.data.tagline[i]"; // fill with tagline from api
    let beerDate =  document.createElement("p");
    beerDate.innerText = "beerBatch.data.first_brewed[i]"; // fill with first_brewed from api
    let beerImg =  document.createElement("img");
    beerImg.setAttribute("src", "beerBatch.data.image_url[i]"); //fill with image_url from api
    beerImg.setAttribute("alt", "img not found");
  }
}
addBeer();
console.log("Hey look in your browser console. It works!");
