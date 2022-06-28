const navSlide = () => {
    const burgher = document.querySelector('.burgher');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    burgher.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
   

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation  = '';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
        
    });

    burgher.classList.toggle('toggle');
});



}

navSlide();