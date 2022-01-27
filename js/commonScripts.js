

document.getElementById('backBtn').addEventListener('click', goBack);

function goBack(){
    history.back();
}

document.getElementById('counter').addEventListener('click', function(){
    console.log('button clicked')
    gotoURL('counter.html');
})

document.getElementById('contact').addEventListener('click', function(){
    console.log('button clicked')
    gotoURL('contact.html');
})

function gotoURL(URL){
    document.location.href = URL;
}