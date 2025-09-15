console.log(`checkinng`);

const myImage = document.getElementById(`image`);

async function fetchData() {
  const response = await fetch(`https://randomfox.ca/floof/`);
  const information = await response.json();
  myImage.src = information.image;
}

async function fetchFacts() {
  const getReq = await fetch(
    `https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`
  );
  console.log(getReq);
  const getRes = await getReq.json();
  console.log(getRes);

  const newP = document.createElement(`p`);
  newP.innerText = getRes.text;
  document.body.appendChild(newP);
}

async function getMusic() {
  const grabMusic = await fetch(
    `https://binaryjazz.us/wp-json/genrenator/v1/story/
`
  );
  console.log(grabMusic);
  const gotMusic = await grabMusic.json();
  console.log(gotMusic);
  const anotherP = document.createElement(`p`);
  anotherP.innerText = gotMusic;
  document.body.appendChild(anotherP);
}

getMusic();
fetchData();
fetchFacts();

// This example will break while in the code it's just an example of returning information to another funciton.

async function ExampleData() {
  const response = await fetch("https://randomfox.ca/floof/");
  const information = await response.json();
  return information;
}

// data parameter now becomes the returned information variable.

function createFoxImage(data) {
  const img = document.createElement("img");
  img.src = data.image;
  document.body.appendChild(img);
}
