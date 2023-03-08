setTimeout(function () {
   alert("loaded");
   window.open = function (url, windowName, windowFeatures) {
      alert("Not opening: " + url);
   }

   Array.from(document.getElementsByTagName("a")).forEach(function(el){
     el.addEventListener("click",function(e){
       e.preventDefault();
   alert(`${el.href} -  ${el.target}`);
     });
   });
}, 500);
