window.onload = function displayCal(){
    console.log('page loaded')
    // let apple = Number(localStorage.getItem('apple'));
    // let banana = Number(localStorage.getItem('banana'));
    // let blackberries = Number(localStorage.getItem('blackberries'));
    // let cherry = Number(localStorage.getItem('cherry'));
    // let kiwi = Number(localStorage.getItem('kiwi'));
    // let grapes = Number(localStorage.getItem('grapes'));
    // let orange = Number(localStorage.getItem('orange'));
    // let peach = Number(localStorage.getItem('peach'));


    // document.getElementById('output').innerHTML = `${apple + banana + blackberries + cherry + kiwi + grapes + orange + peach}`;

    let calories = Number(localStorage.getItem('fruits'));
    document.getElementById('output').innerHTML = `${calories}`
}



// function clearAll(){
//     localStorage.clear();
// }

// document.getElementById('btn-reset').addEventListener('click', clearAll);