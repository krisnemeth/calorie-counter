// checking if fruits array exists in local storage, and if not, creating it.
if(window.localStorage){
    if(!localStorage.fruits){
        localStorage.setItem('fruits', 0);
    }
}