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

const message = () => {
    const button = document.getElementById('button_contact');
    const now = document.querySelector('.row_contact');
    const succes = document.querySelector('.form_succes');
   

    button.addEventListener('click', () => {

        setTimeout(() =>{
            now.classList.add('now');
            
        
            succes.style.display = 'block';

        }, 100);

        

        setTimeout(() =>{
            now.classList.remove('now');
        
            succes.style.display = 'none';
            
        }, 5000);
   
      
    });
}


message();