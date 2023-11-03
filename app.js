let count = 0;
let button = document.getElementById("myButton");
let countDisplay = document.getElementById("count");
button.onclick = function()  {
    count++;
    countDisplay.innerHTML = count;
};
