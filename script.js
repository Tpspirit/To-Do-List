const inputText = document.querySelector(".input_text");

const itemList = document.querySelector(".item_list");

const todoFunc = () => {
  if (inputText.value == "") {
    alert("You gotta right something");
  } else {
    let li = document.createElement("li");
    li.textContent = inputText.value;
    itemList.appendChild(li);

    let span = document.createElement("span");
    span.textContent = "✖";
    li.appendChild(span);
  }

  inputText.value = "";
};

document.querySelector(".btn").addEventListener("click", todoFunc);

document.querySelector(".item_list").addEventListener("click", function (e) {
  //   underlined list && remove list
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("underlined");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
