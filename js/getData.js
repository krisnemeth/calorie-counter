//on window load displaying current calorie count
window.onload = function displayCal(){
   
    let calorieCount = Number(localStorage.getItem('fruits'));
    document.getElementById('output').innerHTML = `${calorieCount}`
}


//resetting the count to zero
function reset(){
    localStorage.setItem('fruits', 0);

    document.getElementById('output').innerHTML = localStorage.getItem('fruits')
}

document.getElementById('btn-reset').addEventListener('click', reset);