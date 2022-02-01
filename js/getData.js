

window.onload = function displayCal(){
    console.log('btn clicked')
    let apple = Number(localStorage.getItem('apple'));

    document.getElementById('output').innerHTML = `${apple}`
    
}