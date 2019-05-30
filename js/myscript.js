$(document).ready(function(){
    var mylist = document.getElementsByClassName("list");
   
    for(var i = 0; i < mylist.length ; i++){
       var span = document.createElement("SPAN");

      var  fav = document.createElement("i");
      fav.className = "fa fa-angle-down";

       //span.className = "close";

        span.appendChild(fav);
        mylist[i].appendChild(span);
       
    }
    
     
   

   
   var coll = document.getElementsByClassName("list");
   var doc = document.getElementsByClassName("fa fa-angle-down");
    var i;

for (i = 0; i < coll.length; i++) {
   doc[i].addEventListener("click",function(){
       if(this.className === "fa fa-angle-down"){
           this.className = "fa fa-angle-up";
       }else{
           this.className = "fa fa-angle-down";
       }

   });
 coll[i].addEventListener("click", function() {
   
   
   this.classList.toggle("active");
   var content = this.nextElementSibling;
   if (content.style.display === "block") {
     content.style.display = "none";

   } else {
     content.style.display = "block";
    
     
    
   }  
 });
 
}




});