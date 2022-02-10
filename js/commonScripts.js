
document.getElementById('backBtn').addEventListener('click', goBack);

function goBack(){
    history.back();
}

document.getElementById('counter').addEventListener('click', function(){
    gotoURL('counter.html');
})

document.getElementById('contact').addEventListener('click', function(){
    gotoURL('contact.html');
})

function gotoURL(URL){
    document.location.href = URL;
}