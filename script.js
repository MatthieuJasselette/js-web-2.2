
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
    let importBeer = await axios.get('https://api.punkapi.com/v2/beers/')
    console.log("control getBeer");
    return importBeer.data;
  } catch (error) {
    console.error(error);
  }
}

let addBeer = async () => {
  let beerBatch = await getBeer();
  let beerBox = document.getElementById("beerCase");
  for (let i = 0 ;  i < 12; i++){
    //create beerItem and its children
    let beerItem = document.createElement("div");
    beerItem.setAttribute("class", "beerTag");
    let beerInfo = document.createElement("div");
    beerInfo.setAttribute("class", "beerInfo");
    let beerPicture = document.createElement("div");
    beerPicture.setAttribute("class", "beerPicture");
    let beerName = document.createElement("h5");
    beerName.innerText = beerBatch[i].name;
    let beerTagLine = document.createElement ("p");
    beerTagLine.innerText = beerBatch[i].tagline;
    let beerDate =  document.createElement("p");
    beerDate.innerText = beerBatch[i].first_brewed;
    let beerImg =  document.createElement("img");
    beerImg.setAttribute("src", beerBatch[i].image_url);
    beerImg.setAttribute("alt", "img not found");
    beerImg.setAttribute("class", "beerImg")
    //append beerItem and its children
    beerBox.appendChild(beerItem);
    beerItem.appendChild(beerInfo);
    beerItem.appendChild(beerPicture);
    beerInfo.appendChild(beerName);
    beerInfo.appendChild(beerTagLine);
    beerInfo.appendChild(beerDate);
    beerPicture.appendChild(beerImg);
  }
}
addBeer();
console.log("Hey look in your browser console. It works!");
