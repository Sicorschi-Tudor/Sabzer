const navSlide = () => {
  const burgher = document.querySelector(".burgher");
  const nav = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".menu li");

  burgher.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burgher.classList.toggle("toggle");
  });
};

navSlide();



// dropdown form contact

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const list = dropdown.querySelector(".list");
  const options = dropdown.querySelectorAll(".list li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    list.classList.toggle("list-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      list.classList.remove("list-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

const sendEmail = () => {
  const targetFirstName = document.getElementById("First").value;
  const targetLastName = document.getElementById("Last").value;
  const targetEmail = document.getElementById("Email").value;
  const targetPhone = document.getElementById("Phone").value;
  const targetMessage = document.getElementById("message").value;
  const targetConcering = document.getElementById("test_Concering").textContent;
  const targetCountry = document.getElementById("test_Country").textContent;
  const targetProfessional = document.getElementById("test_Professional").textContent;
  const targetFunction = document.getElementById("test_Function").textContent;


  let body = 
  "<b>First Name:</b>"+targetFirstName+"<br><br>"+"<b>Last Name:</b>"+targetLastName+"<br><br>"+
  "<b>Email:</b>"+targetEmail+"<br><br>"+"<b>Phone:</b>"+targetPhone+"<br><br>"+
  "<b>Concering:</b>"+targetConcering+"<br><br>"+"<b>Country:</b>"+targetCountry+"<br><br>"+
  "<b>Professional Situation:</b>"+targetProfessional+"<br><br>"+"<b>Function:</b>"+targetFunction+"<br><br>"+
  "<b>Message:</b>"+targetMessage;



     return Email.send({
       Host: "smtp.elasticemail.com",
       Username: "aaw1713tudor@gmail.com",
       Password: "77BF502090D77EB89D2C4FE69A190FBCBCE2",
       To: "aaw1713tudor@gmail.com",
       From: "aaw1713tudor@gmail.com",
       Subject: "This is the subject",
       Body: body,
     }).then((message) => alert(message));

     
};



const message = () => {
     const button = document.getElementById('button_contact');
     const now = document.querySelector('.row_contact');
   const succes = document.querySelector('.form_succes');

  button.addEventListener('click', () => {
    
               now.classList.add('now');
    
             succes.style.display = 'block';
    
    
    
     });
    }
    
    setTimeout(() => {
      message();
    }, "1000")
    