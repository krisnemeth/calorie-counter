//saving an aray of buttons in a variable
let addButtons = document.getElementsByClassName("addBut");

//looping through said array to identify which button has been clicked and the savind the data- attribute of it in local storage
for (let i = 0; i < addButtons.length; i++) {
	addButtons[i].addEventListener('click',function(){
		//getting data attribute from button clicked (uses 'this' to identify which one) and converting it to a number
        let attribute = Number(this.getAttribute('data-calories'));

		//getting localstorage value and coverting it to a number
        let value = Number(localStorage.getItem('fruits'));

		//adding up the current value and any new attribute value then saving it back to localstorage
        localStorage.setItem('fruits', (value + attribute));
	})
}