setTimeout(function () {
   alert("loaded V4");
   window.location="javascript:window.open=function(){alert('Blocked')};void(0);"

   Array.from(document.getElementsByTagName("a")).forEach(function(el){
      el.target
      el.addEventListener("click",function(e){
         e.preventDefault();
         alert(`${el.href} -  ${el.target}`);
      });
   });
}, 500);
