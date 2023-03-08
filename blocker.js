setTimeout(function () {
   alert("loaded V5");
   window.location="javascript:window.openLinkIn=function(){alert('Blocked2')};window.open=function(){alert('Blocked')};void(0);"

   Array.from(document.getElementsByTagName("a")).forEach(function(el){
      el.target
      el.addEventListener("click",function(e){
         e.preventDefault();
         alert(`${el.href} -  ${el.target}`);
      });
   });
}, 500);
