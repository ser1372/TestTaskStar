var countInput = document.getElementById("count");
var valueInput = document.getElementById("count").value;
var plus = document.getElementById("plus");
var form = document.getElementById("forma");
var createBlock = document.getElementById("switch");
plus.onclick = function () {
  countInput.value = ++countInput.value;

  if (countInput.value == 100) {
    countInput.value = 1;
  }
};

minus.onclick = function () {
  countInput.value = --countInput.value;

  if (countInput.value == 0) {
    countInput.value = ++countInput.value;
  }
};



function createMoon() {
 

  const moon = '<div class="moon"></div>';
  const star = '<div class="star"</div>';
 
  document.body.innerHTML = moon;

  document.body.style.background = "#000";

  
 
}

