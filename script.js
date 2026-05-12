// ======================
// HERO SLIDER
// ======================

const slides = document.querySelectorAll(".hero-slide");

const heroText = document.getElementById("heroText");

const heroSub = document.getElementById("heroSub");

const heroData = [

  {
    title: "Study Abroad Made Easy",
    sub: "USA • UK • Canada • Australia"
  },

  {
    title: "Get Admission in Top Universities",
    sub: "Scholarship Guidance Available"
  },

  {
    title: "Fast Visa Processing Support",
    sub: "Expert Guidance Step-by-Step"
  }

];

let current = 0;

/* RUN ONLY IF HERO EXISTS */

if(slides.length > 0){

    function updateHero(){

        slides.forEach((slide)=>{
            slide.classList.remove("active");
        });

        current++;

        if(current >= slides.length){
            current = 0;
        }

        slides[current].classList.add("active");

        if(heroText){
            heroText.innerText = heroData[current].title;
        }

        if(heroSub){
            heroSub.innerText = heroData[current].sub;
        }
    }

    setInterval(updateHero, 4000);
}


fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });


// ======================
// SCROLL TO CONTACT
// ======================

function scrollToForm(){

  const contact =
    document.getElementById("contact");

  if(contact){
    contact.scrollIntoView({
      behavior:"smooth"
    });
  }
}


// ======================
// EMAILJS INIT
// ======================

(function(){

  emailjs.init("86oxutkeoWpA4yYZN");

})();


// ======================
// CONTACT FORM
// ======================

const leadForm =
  document.getElementById("leadForm");

if(leadForm){

  leadForm.addEventListener("submit", function(e){

    e.preventDefault();

    const params = {

      name:
        document.getElementById("name").value,

      phone:
        document.getElementById("phone").value,

      email:
        document.getElementById("email").value,

      message:
        document.getElementById("msg").value
    };

    emailjs.send(
      "service_5sawhwh",
      "template_ch1ahob",
      params
    )

    .then(function(){

      alert("Message sent successfully!");

      leadForm.reset();

    })

    .catch(function(error){

      alert("Failed to send message");

      console.log(error);

    });

  });

}


// ======================
// STICKY HEADER
// ======================

window.addEventListener("scroll", () => {

  const header =
    document.getElementById("header");

  if(window.scrollY > 50){

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");
  }

});


// ======================
// SCROLL ANIMATION
// ======================

const observer =
  new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.classList.add("show");
      }

    });

  }, {
    threshold:0.1
  });

document
  .querySelectorAll(".fade-in")
  .forEach(el => {

    observer.observe(el);

  });


// ======================
// SEE MORE TOGGLE
// ======================


function toggleMore(id, btn) {

  const content =
    document.getElementById(id);

  if(content.classList.contains("show")){

    content.classList.remove("show");

    btn.innerText = "See More";

  } else {

    content.classList.add("show");

    btn.innerText = "See Less";
  }

}
