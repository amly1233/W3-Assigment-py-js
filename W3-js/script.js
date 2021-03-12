let src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
fetch(src).then(function(response) {
  return response.json(); 
}).then(function(outcome) {
  let spot;
  for (let i = 0; i < 8; i++) {
    spot = outcome["result"]["results"][i];
    let img = spot.file.split("http", 2);
    var image = document.createElement("img");
    image.src = 'http' + img[1];
    var box=document.createTextNode(spot.stitle);
    var division=document.createElement("div");
    var element=document.getElementById("list");

    element.appendChild(division);
    division.appendChild(image);
    division.appendChild(box);
  }
});
