const button = document.getElementById("button");
const result = document.getElementById("result");

let clicks = 0;

button.addEventListener("click", function () {

    clicks++;

    result.textContent =
        "Кнопка нажата " + clicks + " раз";

});
