const countInput = document.getElementById("count");
const plus = document.getElementById("plus");
const switcher = document.getElementById("switch");

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

  else if(countInput.value == -1){
    ++countInput.value;
  }
};


function createMoon() {
  let checkbox = document.getElementById('checkboxs');
  let result = ``;

  if(checkbox.checked){
    result = `<div class="moon"></div>`;
  }

  else{
    result = `<div class="moonSecond"></div>`;
  }
  
  document.body.style.background = "#000";
  let stars = ``;
  for (let i = 0; i < countInput.value; i++) {
     result += "<div class=star></div>";

  }
  result + stars;


  document.getElementById('body').innerHTML = result;
  
  
 
}

