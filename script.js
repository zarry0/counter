const counter = document.querySelector('.counter');
const decrease = document.querySelector('.counter-controls .decrease');
const increase = document.querySelector('.counter-controls .increase');
const reset = document.querySelector('.counter-controls .reset');

let count = 0;

decrease.addEventListener('click', () => {
    count = decreaseCount(count);
    counter.innerHTML = count.toString();
    counter.style.color = setColor(count);
    console.log(count);
});
increase.addEventListener('click', () => {
    count = increaseCount(count);
    counter.innerHTML = count.toString();
    counter.style.color = setColor(count);
    console.log(count);
});
reset.addEventListener('click', () => {
    count = resetCount(count);
    counter.innerHTML = count.toString();
    counter.style.color = setColor(count);
    console.log(count);
});

function increaseCount(current) {return current + 1}
function decreaseCount(current) {return current - 1}
function resetCount() {return 0}
function setColor(current) { 
    return (current > 0) ? "#30bf64" : ((current < 0) ? "#ff3d3d" : "#000000");
}