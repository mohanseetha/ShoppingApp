const buttons = document.querySelectorAll('.btn-success');
const c = document.getElementById("count");
let count = 0;
function updateClick() {
    count++;
    c.innerHTML = count;
}
buttons.forEach(function (button){
    button.addEventListener('click',updateClick)
})

const bs = document.querySelectorAll(".btn-primary");
bs.forEach(function (bs){
    document.addEventListener('DOMContentLoaded', function () {
        let popover = new bootstrap.Popover(bs);
    });
})
