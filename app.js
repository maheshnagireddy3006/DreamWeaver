if (gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

window.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('navbar');
  gsap.from(navbar, {
    y: -100,
    duration: 1.3, 
    ease: 'expo.out', 
    delay: 0.5
  });
  
  var buttons = document.querySelectorAll('.cta-btn');
  buttons.forEach(function(button) {
    button.addEventListener('mouseenter', function() {
      gsap.to(button, {
        scale: 1.08,
        duration: 0.3,
        ease: 'power1.out'
      });
    });
    button.addEventListener('mouseleave', function() {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power1.out'
      });
    });
  });

  gsap.from('.features-section', {
    scrollTrigger: '.features-section',
    opacity: 0,
    y: 60,
    duration: 1.5,
    ease: 'expo.out',
    delay: 0.1
  });

  gsap.from('.testimonials-section', {
    scrollTrigger: '.testimonials-section',
    opacity: 0,
    y: 60,
    duration: 1.5,
    ease: 'expo.out',
    delay: 0.2
  });

  gsap.from('.contact-section', {
    scrollTrigger: '.contact-section',
    opacity: 0,
    y: 60,
    duration: 1.5,
    ease: 'expo.out',
    delay: 0.3
  });
}); 
