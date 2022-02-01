document.getElementById('add').addEventListener('click', addA);

function addA(){
    console.log('btn clicked');
    localStorage.setItem('apple', 44);
}

document.getElementById('add').addEventListener('click', addA);

function addB(){
    console.log('btn clicked');
    localStorage.setItem('banana', 65);
}