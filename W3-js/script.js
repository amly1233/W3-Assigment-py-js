//https://www.youtube.com/watch?v=x4hxA5I7X94
//https://ithelp.ithome.com.tw/articles/10198687   canvas practice
//先顯示 Loading的資訊
// let list=document.getElementById("list");
// list.innerHTML="...Loading...";
//透過 AJAX fetch API 連線到遠端的網址，抓取資料
/*
fetch(網址).then(function(response){
  //Response 物件,代表伺服器的回應
})
*/

let src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
fetch(src).then(function(response) {
  // console.log(response);  測試看看有沒有成功
  return response.json(); //將資料用JSON的格式詮釋成：物件和陣列的組合
}).then(function(outcome) {
  // console.log("最終的資料",outcome);
  //把抓到的資料放在畫面上
  // list.innerHTML="";  讓 Loading 字樣消失
  // console.log(outcome["result"]["results"]);
  let spot;
  for (let i = 0; i < 8; i++) {
    spot = outcome["result"]["results"][i];
    // console.log(spot);
    let img = spot.file.split("http", 2);
    var image = document.createElement("img");
    image.src = 'http' + img[1];
    var box=document.createTextNode(spot.stitle);
    var division=document.createElement("div");
    var element=document.getElementById("list");

    element.appendChild(division);
    division.appendChild(image);
    division.appendChild(box);


    //image+subtitle
    // var division=document.createElement("div");  // 建立元素
    // var box=document.createTextNode(spot.stitle);  //建立文字
    //
    // var image = document.createElement("img");
    // image.src = 'http' + img[1];
    //
    // division.appendChild(image);
    // division.appendChild(box);
    //
    // var elementImg=document.getElementById("list");
    // var elementTitle=document.getElementById("list");
    // elementImg.appendChild(image);
    // elementTitle.appendChild(box);

    // // subtitle
    // var paragraph = document.createElement("p");
    // var node = document.createTextNode(spot.stitle);
    // paragraph.appendChild(node);
    //
    // var element = document.getElementById("list");
    // element.appendChild(paragraph);
    //
    // // image
    // var src = document.getElementById("list"); //取得容器
    // var image = document.createElement("img"); //建立元素
    // // image.src = 'http' + img[1];
    // src.appendChild(image);
    //
    // var element=document.getElementById("list");
    // var firstChild=paragraph;
    // element.insertBefore(image,firstChild);


  }
});
