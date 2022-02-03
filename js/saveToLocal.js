document.getElementById('addA').addEventListener('click', addA);

function addA(){
    console.log('btn clicked');
    localStorage.setItem('apple', 44);
}

document.getElementById('addB').addEventListener('click', addB);

function addB(){
    console.log('btn clicked');
    localStorage.setItem('banana', 65);
}

