window.addEventListener('DOMContentLoaded', function() {
    var password = prompt('Hey')
    
    if(password != 'love') {
        document.body.innerHTML = "Sorry!"
    }
})