alert("Loaded");
window.open = function (url, windowName, windowFeatures) {
   alert("Not opening: " + url);
}
