const body = document.querySelector("#body");
const topper = document.querySelector("#top");
const btn = document.querySelector("#btn");
const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");
const result = document.querySelector("#result");
const buttons = document.querySelector("#buttons");
const numbers = document.querySelectorAll("#numbers");
const del = document.querySelector("#delete");
const reset = document.querySelector("#reset");
const equal = document.querySelector("#equal");

// themes

function normalMode() {
  body.classList.remove("theme_2_body", "theme_3_body");
  topper.classList.remove("theme_2_top", "theme_3_top");
  topper.classList.remove("theme_2_top", "theme_3_top");
  btn.classList.remove("theme_2_btn", "theme_3_btn");
  btn_1.classList.remove("theme_2_btn_1", "theme_3_btn_1");
  btn_2.classList.remove("theme_2_btn_2", "theme_3_btn_2");
  btn_3.classList.remove("theme_2_btn_3", "theme_3_btn_3");
  result.classList.remove("theme_2_result", "theme_3_result");
  buttons.classList.remove("theme_2_buttons", "theme_3_buttons");
  numbers.forEach((number) => {
    number.classList.remove("theme_2_numbers", "theme_3_numbers");
  });
  del.classList.remove("theme_2_delete", "theme_3_delete");
  reset.classList.remove("theme_2_delete", "theme_3_delete");
  equal.classList.remove("theme_2_equal", "theme_3_equal");
}

function lightMode() {
  body.classList.add("theme_2_body");
  body.classList.remove("theme_3_body");
  topper.classList.add("theme_2_top");
  topper.classList.remove("theme_3_top");
  btn.classList.add("theme_2_btn");
  btn.classList.remove("theme_3_btn");
  btn_1.classList.add("theme_2_btn_1");
  btn_1.classList.remove("theme_3_btn_1");
  btn_2.classList.add("theme_2_btn_2");
  btn_2.classList.remove("theme_3_btn_2");
  btn_3.classList.add("theme_2_btn_3");
  btn_3.classList.remove("theme_3_btn_3");
  result.classList.add("theme_2_result");
  result.classList.remove("theme_3_result");
  buttons.classList.add("theme_2_buttons");
  buttons.classList.remove("theme_3_buttons");
  numbers.forEach((number) => {
    number.classList.add("theme_2_numbers");
    number.classList.remove("theme_3_numbers");
  });
  del.classList.add("theme_2_delete");
  del.classList.remove("theme_3_delete");
  reset.classList.add("theme_2_delete");
  reset.classList.remove("theme_3_delete");
  equal.classList.add("theme_2_equal");
  equal.classList.remove("theme_3_equal");
}

function darkMode() {
  body.classList.add("theme_3_body");
  body.classList.remove("theme_2_body");
  topper.classList.add("theme_3_top");
  topper.classList.remove("theme_2_top");
  btn.classList.add("theme_3_btn");
  btn.classList.remove("theme_2_btn");
  btn_1.classList.add("theme_3_btn_1");
  btn_1.classList.remove("theme_2_btn_1");
  btn_2.classList.add("theme_3_btn_2");
  btn_2.classList.remove("theme_2_btn_2");
  btn_3.classList.add("theme_3_btn_3");
  btn_3.classList.remove("theme_2_btn_3");
  result.classList.add("theme_3_result");
  result.classList.remove("theme_2_result");
  buttons.classList.add("theme_3_buttons");
  buttons.classList.remove("theme_2_buttons");
  numbers.forEach((number) => {
    number.classList.add("theme_3_numbers");
    number.classList.remove("theme_2_numbers");
  });
  del.classList.add("theme_3_delete");
  del.classList.remove("theme_2_delete");
  reset.classList.add("theme_3_delete");
  reset.classList.remove("theme_2_delete");
  equal.classList.add("theme_3_equal");
  equal.classList.remove("theme_2_equal");
}

// calculator

function display(x) {
  result.textContent += x;
}

function delt() {
  result.textContent = result.textContent.slice(0, -1);
}
function rst() {
  result.textContent = "";
}

function eva() {
  let answer = eval(result.textContent);
  result.textContent = answer;
}
