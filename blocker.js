setTimeout(function () {
   alert("loaded V3");
   window.location="javascript:window.open=alert('Blocked');void(0);"

   Array.from(document.getElementsByTagName("a")).forEach(function(el){
      el.target
      el.addEventListener("click",function(e){
         e.preventDefault();
         alert(`${el.href} -  ${el.target}`);
      });
   });
}, 500);
