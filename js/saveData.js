// document.getElementById('addA').addEventListener('click', addA);

// function addA(){
//     console.log('btn clicked');
//     localStorage.setItem('apple', 44);
// }

// document.getElementById('addB').addEventListener('click', addB);

// function addB(){
//     // retrieve local storage
//     // add 65 to local storage
//     // sAVE LOCAL STORAGE
//     console.log('btn clicked');
//     localStorage.setItem('banana', 65);
// }

// document.getElementById('addBlck').addEventListener('click', addBlck);

// function addBlck(){
//     console.log('btn clicked');
//     localStorage.setItem('blackberries', 25);
// }

// document.getElementById('addC').addEventListener('click', addC);

// function addC(){
//     console.log('btn clicked');
//     localStorage.setItem('cherry', 50);
// }

// document.getElementById('addK').addEventListener('click', addK);

// function addK(){
//     console.log('btn clicked');
//     localStorage.setItem('kiwi', 50);
// }

// document.getElementById('addG').addEventListener('click', addG);

// function addG(){
//     console.log('btn clicked');
//     localStorage.setItem('grapes', 62);
// }

// document.getElementById('addO').addEventListener('click', addO);

// function addO(){
//     console.log('btn clicked');
//     localStorage.setItem('orange', 30);
// }

// document.getElementById('addP').addEventListener('click', addP);

// function addP(){
//     console.log('btn clicked');
//     localStorage.setItem('peach', 30);
// }

let addButtons = document.getElementsByClassName("addBut");

for (let i = 0; i < addButtons.length; i++) {
	addButtons[i].addEventListener('click',function(){
		// gets data attribute from button clicked on (uses 'this' to identify which one)
        let attribute = Number(this.getAttribute('data-calories'));

		//get localstorage value
        let value = Number(localStorage.getItem('fruits'));

		//add new value to localstorage
        localStorage.setItem('fruits', (value + attribute));
	})
}