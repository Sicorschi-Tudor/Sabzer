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

    let Concerning = document.getElementById('Concerning')
    let Country = document.getElementById('Country')
    let Function = document.getElementById('Function')
    let Professional = document.getElementById('Professional')
    let First = document.getElementById('First')
    let Last = document.getElementById('Last')
    let Email = document.getElementById('Email')
    let Phone = document.getElementById('Phone')
    let message = document.getElementById('message')
   

    button.addEventListener('click', () => {

   if(Concerning.value === '' || Country.value === '' || Function.value === '' || Professional.value === '' || First.value === '' || 
   Last.value === '' || Email.value === '' || Phone.value === '' || message.value === ''){
    alert('Introduceti datele');

   }else{
            now.classList.add('now');
            
        
            succes.style.display = 'block';

  
}
   
      
    });
}


message();



const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const list = dropdown.querySelector('.list');
    const options = dropdown.querySelectorAll('.list li');
    const selected = dropdown.querySelector('.selected');


select.addEventListener('click', () => {

    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    list.classList.toggle('list-open');
});
options.forEach(option => {
    option.addEventListener('click',() => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        list.classList.remove('list-open');
        options.forEach(option => {
option.classList.remove('active');
        });
        option.classList.add('active');
    });
});




});