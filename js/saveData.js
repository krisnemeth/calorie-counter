document.getElementById('addA').addEventListener('click', addA);

function addA(){
    console.log('btn clicked');
    localStorage.setItem('apple', 44);
}

document.getElementById('addB').addEventListener('click', addB);

function addB(){
    // retrieve local storage
    // add 65 to local storage
    // sAVE LOCAL STORAGE
    console.log('btn clicked');
    localStorage.setItem('banana', 65);
}

document.getElementById('addBlck').addEventListener('click', addBlck);

function addBlck(){
    console.log('btn clicked');
    localStorage.setItem('blackberries', 25);
}

document.getElementById('addC').addEventListener('click', addC);

function addC(){
    console.log('btn clicked');
    localStorage.setItem('cherry', 50);
}

document.getElementById('addK').addEventListener('click', addK);

function addK(){
    console.log('btn clicked');
    localStorage.setItem('kiwi', 50);
}

document.getElementById('addG').addEventListener('click', addG);

function addG(){
    console.log('btn clicked');
    localStorage.setItem('grapes', 62);
}

document.getElementById('addO').addEventListener('click', addO);

function addO(){
    console.log('btn clicked');
    localStorage.setItem('orange', 30);
}

document.getElementById('addP').addEventListener('click', addP);

function addP(){
    console.log('btn clicked');
    localStorage.setItem('peach', 30);
}