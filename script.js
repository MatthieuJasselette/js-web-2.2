
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
    console.log("control getBeer");
    return importBeer.data;
  } catch (error) {
    console.error(error);
  }
}

let addBeer = async () => {
  let beerBatch = await getBeer();
  let beerBox = document.getElementById("beerCase");
  for (let i = 0 ;  i < 5 ; i++){
    //create beerItem and its children
    let beerItem = document.createElement("div");
    beerItem.setAttribute("class", "beerTag");
    let beerName = document.createElement("h5");
    beerName.innerText = beerBatch[i].name; // fill with name from api
    let beerTagLine = document.createElement ("p");
    beerTagLine.innerText = beerBatch[i].tagline; // fill with tagline from api
    let beerDate =  document.createElement("p");
    beerDate.innerText = beerBatch[i].first_brewed; // fill with first_brewed from api
    let beerImg =  document.createElement("img");
    beerImg.setAttribute("src", beerBatch[i].image_url); //fill with image_url from api
    beerImg.setAttribute("alt", "img not found");
    //append beerItem and its children
    beerBox.appendChild(beerItem);
    beerItem.appendChild(beerName);
    beerItem.appendChild(beerTagLine);
    beerItem.appendChild(beerDate);
    beerItem.appendChild(beerImg);
  }
}
addBeer();
console.log("Hey look in your browser console. It works!");
