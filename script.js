document.querySelector('.hamburger-menu').addEventListener('click', toggle);

function toggle(){
    let mobileNav=document.querySelector('.nav-mobile');
    if (mobileNav.style.display==='none'){
        mobileNav.style.display='block'
    }
    else{mobileNav.style.display='none'}
    }

