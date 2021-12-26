window.addEventListener('DOMContentLoaded', function() {
    //var password = prompt('Hey')
    
    //if(password != 'love') {
    //    document.body.innerHTML = "Sorry!"
    //}

    document.getElementById('hamburger-btn').addEventListener('click', function() {
        var navigation = document.getElementById('navigation');
        
        if(navigation.style.marginRight === '' || navigation.style.marginRight === '0px' || navigation.style.marginRight === '0') {
            navigation.style.marginRight = '-80%'
        }else {
            navigation.style.marginRight = '0'
        }
    })
})