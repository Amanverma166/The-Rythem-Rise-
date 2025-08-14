// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
        
        // Reset the form
        contactForm.reset();
    });
}

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.about, .classes, .batches, .testimonials, .contact');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.about, .classes, .batches, .testimonials, .contact').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Particles.js Configuration (uncomment if you include particles.js)
/*
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f5d4"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f5d4",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});
*/
// Show modal on page load
document.addEventListener('DOMContentLoaded', function() {
  // Get the elements
  const registerBtn = document.getElementById('register-btn');
  const modal = document.getElementById('registration-modal');
  const closeModal = document.querySelector('.close-modal');
  
  // Show modal when register button is clicked
  registerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
  });
  
  // Hide modal when close button is clicked
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Hide modal when clicking outside the modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// login page

document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');

  // Get buttons
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const showRegister = document.getElementById('show-register');
  const showLogin = document.getElementById('show-login');

  // Close buttons inside modals
  const closeButtons = document.querySelectorAll('.close-modal');

  // --- Open Login Modal ---
  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  // --- Open Register Modal ---
  registerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    registerModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  // --- Switch from Login → Register ---
  showRegister.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
  });

  // --- Switch from Register → Login ---
  showLogin.addEventListener('click', function(e) {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
  });

  // --- Close modals when ✕ clicked ---
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      loginModal.style.display = 'none';
      registerModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  // --- Close modals when clicking outside ---
  [loginModal, registerModal].forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

  // --- Close modals on Escape key ---
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      loginModal.style.display = 'none';
      registerModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
