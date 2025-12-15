 
 //start scroll menu js 
    document.addEventListener("DOMContentLoaded", function() {
      const headerHeight = 150;

      // Smooth scroll for menu links
      document.querySelectorAll('#navbarSupportedContent .nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (!target) return;

          const topPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: topPos,
            behavior: 'smooth'
          });
            AOS.refresh();
          // Close mobile menu if open
          const navCollapse = document.querySelector('.navbar-collapse');
          if (navCollapse.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
          }
        });
      });

      // Header shadow on scroll
      window.addEventListener('scroll', () => {
        document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
      });

      // Initialize ScrollSpy
      new bootstrap.ScrollSpy(document.body, {
        target: '#navbarSupportedContent',
        offset: headerHeight + 5
      });

      // Initialize AOS
      AOS.init({
        duration: 800,
        once: false,
        mirror: true
      });
       });
 // End scroll menu  js


 // start portfolio js
const tabs = document.querySelectorAll("#portfolioTabs .nav-link");
const items = document.querySelectorAll(".portfolio-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    // Show/hide items based on multiple categories
    items.forEach(item => {
      const categories = item.dataset.category.split(" "); // Split by space
      if (filter === "all" || categories.includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
//portfolio js end


// start Email send js

document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault(); // Prevent default form submission

    const alertBox = document.getElementById('formAlert');

    // Send form using EmailJS

    emailjs.send("service_n8rkfee","template_i9jkpsu",{
         to_email: "rbhatti0044@gmail.com",
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
    })
     .then(() => {
    alertBox.innerHTML =
      '<div class="alert alert-success">Thank you! Your message has been sent.</div>';
    this.reset();
  })
  .catch(error => {
    console.error("EmailJS Error:", error);
    alertBox.innerHTML =
      '<div class="alert alert-danger">Failed to send message. Please try again.</div>';
  });
});


//End Email js

//Back to top icon

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {          // Show after 100px scroll
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none'; // Hide when at top
    }
});

// Smooth scroll
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



