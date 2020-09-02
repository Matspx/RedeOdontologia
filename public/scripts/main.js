// Box Serviços
function serviceBox(i){
  var boxMain = document.getElementById("serviceBox").querySelectorAll("div"); 
  var boxActive = document.getElementById(`service-box-${i}`);
  var j;
for (j = 0; j < boxMain.length; j++) {
  boxMain[j].style.display = "none";
}
  
  boxActive.style.display = "block";

};
