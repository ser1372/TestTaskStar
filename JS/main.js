const countInput = document.getElementById("count");
const valueInput = document.getElementById("count").value;
const plus = document.getElementById("plus");
const form = document.getElementById("forma");
const switcher = document.getElementById("switch");






plus.onclick = function () {
  countInput.value = ++countInput.value;

  if (countInput.value == 100) {
    countInput.value = 1;
  }

  console.log(countInput.value)
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
  
    console.log(document.body.querySelector('moon'))
 
}

