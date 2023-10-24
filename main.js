const navLinks = document.querySelectorAll('.navbar-links a');
const goTop = document.querySelector('.go-top');
const submit = document.getElementById('form')


const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');

const facebook = document.getElementById('facebook')
const instagram = document.getElementById('instagram')
const telegram = document.getElementById('telegram')

const accordionItems = document.querySelectorAll('.accordion-item');


facebook.addEventListener('click',function(e){
  e.preventDefault();

  window.location.href='https://www.facebook.com/profile.php?id=100012018690650'
})

instagram.addEventListener('click',function(e){
  e.preventDefault();
  
  window.location.href = "https://instagram.com/gunay.mubariz?igshid=MzNlNGNkZWQ4Mg=="
})

telegram.addEventListener('click',function(e){
  e.preventDefault();
  
  window.location.href = "https://t.me/GMiyAn"
})


form.addEventListener('input', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

};


submit.addEventListener('submit' ,function(e){
  e.preventDefault()
  var name = document.getElementsByName('name').value;
  var email = document.getElementsByName('email').value;

  

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  
  Swal.fire('Your message was successfully sent!')
  // alert('sent')

  document.getElementById('form').reset();
})

goTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behaviour:'smooth'
    })
})

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    if(scrollPosition > 250) {
      goTop.classList.remove('up');
    }else{
      goTop.classList.add('up')
    }
  });

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); 
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({behavior: 'smooth'   });
});
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 250) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
    
  });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });



 
  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
    
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector('.accordion-content');
          otherContent.style.display = 'none';
        }
      });

      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });



  const tabButtons = document.querySelectorAll('.tab-button');
  const tabItems = document.querySelectorAll('.tab-item');

  function showTab(tabId) {
    tabItems.forEach(item => {
      if (item.id === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    tabButtons.forEach(button => {
      const isActive = button.getAttribute('data-tab') === tabId;
      if (isActive) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      showTab(tabId);
    });
  });



