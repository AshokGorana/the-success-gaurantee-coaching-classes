document.addEventListener("DOMContentLoaded", () => {
const input = document.querySelector("input");
const button = document.querySelector("button");


button.addEventListener("click", () => {
  let div = document.createElement("div");
  div.className = "todo";
  div.innerText = input.value;

  document.querySelector(".todo-list").append(div);
});
});