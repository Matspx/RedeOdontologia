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

 
//Dropdown - Agende
 document.querySelector('.select-block').addEventListener('click', function () {
     this.querySelector('.custom-select').classList.toggle('open');
 })
 for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      }
  })
}
for (const dropdown of document.querySelectorAll(".select-block")) {
  dropdown.addEventListener('click', function() {
      this.querySelector('.custom-select').classList.toggle('open');
  })
}

 //window.addEventListener('click', function (e) {
 //    const select = document.querySelector('.custom-select')
 //    if (!select.contains(e.target)) {
 //        select.classList.remove('open');
 //    }
 //});

window.addEventListener('click', function(e) {
  for (const select of document.querySelectorAll('.custom-select')) {
      if (!select.contains(e.target)) {
          select.classList.remove('open');
      }
  }
});
