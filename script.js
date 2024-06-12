function clickMenu(){
    var menuHb = document.getElementById('menu-hb');


    if(menuHb.classList.contains('open')){
        menuHb.classList.remove('open')
    }else{
        menuHb.classList.add('open')
    }



}