document.getElementById('addApple').addEventListener('click', addApple);

function addApple(){
	localStorage.setItem('apple', 44);

    if(localStorage.apple){
        let apple = Number(localStorage.getItem('apple'));
        document.getElementById('calCount').innerHTML = `${apple}`
    } else {
        
    }
}