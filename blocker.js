setTimeout(function () {
   window.location="javascript:console.clear=function(){};window.open=function(url, target, windowFeatures){alert(`window.open ${url} - ${target}`)};void(0);"

   Array.from(document.getElementsByTagName("a")).forEach(function(el){
      el.target
      el.addEventListener("click",function(e){
         e.preventDefault();
         alert(`${el.href} -  ${el.target}`);
      });
   });
}, 500);
