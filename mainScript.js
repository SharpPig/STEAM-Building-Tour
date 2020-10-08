window.onload = function (){
var navButtonClicked = false;
var mouseOnInfo = false;
var mouseOnMoreInfo = false;
var mouseOnInfo2 = false;
var mouseOnMoreInfo2 = false;
var mouseOnInfo3 = false;
var mouseOnMoreInfo3 = false;
var infoClicked = false;
var infoClicked2 = false;
var infoClicked3 = false;

var header = document.getElementById("header");
var navButton = document.getElementById("navButton");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");
var navbar = document.getElementById("navbar");
var container = document.getElementById("container");
var info = document.getElementById("info");
var moreInfo = document.getElementById("moreInfo");
var info2 = document.getElementById("info2");
var moreInfo2 = document.getElementById("moreInfo2");
var info3 = document.getElementById("info3");
var moreInfo3 = document.getElementById("moreInfo3");
var width = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

navButton.onclick = function() {
    if (navButtonClicked == false) {
      container.style.width = "83.1%";
      navbar.style.display = "block";
      bar1.style.display = "none";
      bar3.style.display = "none";
      navButtonClicked = true;
    }
    else {
      container.style.width = "100%";
      navbar.style.display = "none";
      bar1.style.display = "block";
      bar3.style.display = "block";
      navButtonClicked = false;
    }
    if (width < 600) {
      container.style.width = "100%";
    }
}
navbar.onclick = function() {
  navbar.style.display = "none";
  container.style.width = "100%";
  bar1.style.display = "block";
  bar3.style.display = "block";
  navButtonClicked = false;
}
//
/*info.onmouseover = function() {
  moreInfo.style.display = "block";
  mouseOnInfo = true;
}
info.onmouseout = function() {
  //moreInfo.style.display = "none";
  mouseOnInfo = false;
}
moreInfo.onmouseover = function() {
  moreInfo.style.display = "block";
  mouseOnMoreInfo = true;
}
moreInfo.onmouseout = function() {
  //moreInfo.style.display = "none";
  mouseOnMoreInfo = false;
  if (mouseOnInfo == false && mouseOnMoreInfo == false) {
  moreInfo.style.display = "none";
  }
}
//
info2.onmouseover = function() {
  moreInfo2.style.display = "block";
  mouseOnInfo2 = true;
}
info2.onmouseout = function() {
  mouseOnInfo2 = false;
}
moreInfo2.onmouseover = function() {
  moreInfo.style.display = "block";
  mouseOnMoreInfo2 = true;
}
moreInfo2.onmouseout = function() {
  mouseOnMoreInfo2 = false;
  if (mouseOnInfo2 == false && mouseOnMoreInfo2 == false) {
  moreInfo2.style.display = "none";
  }
}
//
info3.onmouseover = function() {
  moreInfo3.style.display = "block";
  mouseOnInfo3 = true;
}
info3.onmouseout = function() {
  mouseOnInfo3 = false;
}
moreInfo3.onmouseover = function() {
  moreInfo3.style.display = "block";
  mouseOnMoreInfo3 = true;
}
moreInfo3.onmouseout = function() {
  mouseOnMoreInfo3 = false;
  if (mouseOnInfo3 == false && mouseOnMoreInfo3 == false) {
  moreInfo3.style.display = "none";
  }
}*/
info.onclick = function() {
  if (infoClicked == false) {
    moreInfo.style.display = "block";
    infoClicked = true;
  }
  else {
    moreInfo.style.display = "none";
    infoClicked = false;
  }
}
info2.onclick = function() {
  if (infoClicked2 == false) {
    moreInfo2.style.display = "block";
    infoClicked2 = true;
  }
  else {
    moreInfo2.style.display = "none";
    infoClicked2 = false;
  }
}
info3.onclick = function() {
  if (infoClicked3 == false) {
    moreInfo3.style.display = "block";
    infoClicked3 = true;
  }
  else {
    moreInfo3.style.display = "none";
    infoClicked3 = false;
  }
}
  
}