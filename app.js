// Register GSAP's ScrollTrigger plugin
if (gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

// Run animations after the page loads
window.addEventListener('DOMContentLoaded', function() {
  // 1. Navbar Slide-In Animation (smoother)
  var navbar = document.getElementById('navbar');
  gsap.from(navbar, {
    y: -100,
    duration: 1.3, // longer duration
    ease: 'expo.out', // gentler easing
    delay: 0.5
  });

  // 2. Button Hover Pulse Animation (smoother)
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

  // 3. Scroll-Triggered Fade-Ins for Three Sections (smoother, with delay)
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