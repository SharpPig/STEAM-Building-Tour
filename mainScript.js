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
var infoClicked4 = false;
var infoClicked5 = false;
var infoClicked6 = false;
var infoClicked7 = false;
var infoClicked8 = false;
var infoClicked9 = false;

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
var info4 = document.getElementById("info4");
var moreInfo4 = document.getElementById("moreInfo4");
var info5 = document.getElementById("info5");
var moreInfo5 = document.getElementById("moreInfo5");
var info6 = document.getElementById("info6");
var moreInfo6 = document.getElementById("moreInfo6");
var info7 = document.getElementById("info7");
var moreInfo7 = document.getElementById("moreInfo7");
var info8 = document.getElementById("info8");
var moreInfo8 = document.getElementById("moreInfo8");
var info9 = document.getElementById("info9");
var moreInfo9 = document.getElementById("moreInfo9");
var site1 = document.getElementById("site1");
var site2 = document.getElementById("site2");
var site3 = document.getElementById("site3");
var site4 = document.getElementById("site4");
var site5 = document.getElementById("site5");
var site6 = document.getElementById("site6");
var site7 = document.getElementById("site7");
var site8 = document.getElementById("site8");
var site9 = document.getElementById("site9");
var site1C = document.getElementById("site1C");
var site2C = document.getElementById("site2C");
var site3C = document.getElementById("site3C");
var site4C = document.getElementById("site4C");
var site5C = document.getElementById("site5C");
var site6C = document.getElementById("site6C");
var site7C = document.getElementById("site7C");
var site8C = document.getElementById("site8C");
var site9C = document.getElementById("site9C");
var homeNav = document.getElementById("homeNav");
var site1Nav = document.getElementById("site1Nav");
var site2Nav = document.getElementById("site2Nav");
var site3Nav = document.getElementById("site3Nav");
var site4Nav = document.getElementById("site4Nav");
var site5Nav = document.getElementById("site5Nav");
var site6Nav = document.getElementById("site6Nav");
var site7Nav = document.getElementById("site7Nav");
var site8Nav = document.getElementById("site8Nav");
var site9Nav = document.getElementById("site9Nav");
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
site1Nav.onclick = function() {
  site1C.style.display = "block";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site2Nav.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "block";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site3Nav.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "block";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site4Nav.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "block";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site5Nav.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "block";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site6Nav.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "block";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site7Nav.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "block";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site8Nav.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "block";
  site9C.style.display = "none";
}
site9Nav.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "block";
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
info4.onclick = function() {
  if (infoClicked4 == false) {
    moreInfo4.style.display = "block";
    infoClicked4 = true;
  }
  else {
    moreInfo4.style.display = "none";
    infoClicked4 = false;
  }
}
info5.onclick = function() {
  if (infoClicked5 == false) {
    moreInfo5.style.display = "block";
    infoClicked5 = true;
  }
  else {
    moreInfo5.style.display = "none";
    infoClicked5 = false;
  }
}
info6.onclick = function() {
  if (infoClicked6 == false) {
    moreInfo6.style.display = "block";
    infoClicked6 = true;
  }
  else {
    moreInfo6.style.display = "none";
    infoClicked6 = false;
  }
}
info7.onclick = function() {
  if (infoClicked7 == false) {
    moreInfo7.style.display = "block";
    infoClicked7 = true;
  }
  else {
    moreInfo7.style.display = "none";
    infoClicked7 = false;
  }
}
info8.onclick = function() {
  if (infoClicked8 == false) {
    moreInfo8.style.display = "block";
    infoClicked8 = true;
  }
  else {
    moreInfo8.style.display = "none";
    infoClicked8 = false;
  }
}
info9.onclick = function() {
  if (infoClicked9 == false) {
    moreInfo9.style.display = "block";
    infoClicked9 = true;
  }
  else {
    moreInfo9.style.display = "none";
    infoClicked9 = false;
  }
}
site1.onclick = function() {
  site1C.style.display = "block";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site2.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "block";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site3.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "block";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site4.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "block";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site5.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "block";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site6.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "block";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site7.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "block";
  site8C.style.display = "none";
  site9C.style.display = "none";
}
site8.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "block";
  site9C.style.display = "none";
}
site9.onclick = function() {
  site1C.style.display = "none";
  site2C.style.display = "none";
  site3C.style.display = "none";
  site4C.style.display = "none";
  site5C.style.display = "none";
  site6C.style.display = "none";
  site7C.style.display = "none";
  site8C.style.display = "none";
  site9C.style.display = "block";
}
  
}