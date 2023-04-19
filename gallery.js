var gallery = document.querySelector("#gallery");
var getVal = function (elem, style) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getHeight = function (item) {
  return item.querySelector(".content").getBoundingClientRect().height;
};
var resizeAll = function () {
  var altura = getVal(gallery, "grid-auto-rows");
  var gap = getVal(gallery, "grid-row-gap");
  gallery.querySelectorAll(".gallery-item").forEach(function (item) {
    var el = item;
    el.style.gridRowEnd =
      "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
  });
};
gallery.querySelectorAll("img").forEach(function (item) {
  item.classList.add("byebye");
  if (item.complete) {
    console.log(item.src);
  } else {
    item.addEventListener("load", function () {
      var altura = getVal(gallery, "grid-auto-rows");
      var gap = getVal(gallery, "grid-row-gap");
      var gitem = item.parentElement.parentElement;
      gitem.style.gridRowEnd =
        "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
      item.classList.remove("byebye");
    });
  }
});

/* JS code to refresh the page if window is changed (from: https://coursesweb.net/ ) */
function winSize() {
 // returns an object with height and width of the window
 var win_size = {};
 if (self.innerHeight) {
 win_size.height = self.innerHeight;
 win_size.width = self.innerWidth;
 } else if (document.documentElement && document.documentElement.clientHeight) {
 win_size.height = document.documentElement.clientHeight;
 win_size.width = document.documentElement.Width;
 } else if (document.body) {
 win_size.height = document.body.clientHeight;
 win_size.width = document.body.clientWidth;
 }
 return win_size;
}
var win_size = winSize();

// set indice "m" for mobile (max. 400px), "t" for tablet (max. 700px), "d" for desktop, according to window size
var dev_i = (win_size.width <400) ? 'm' : ((win_size.width <700) ? 't' :'d');

// when Resize browser, check window-width; refresh if current device indice not initial device indice
window.addEventListener('resize', function(e){
 var win_size2 = winSize();
 var dev_i2 = (win_size2.width <400) ? 'm' : ((win_size2.width <700) ? 't' :'d');
 if(dev_i2 != dev_i) window.location.replace(window.location.href);
}, false);
