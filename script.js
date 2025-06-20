    document.addEventListener('DOMContentLoaded', function () {
      const menuToggle = document.getElementById('menu-toggle');
      const mobileNav = document.getElementById('mobileNav');

      menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
      });

      const header = document.querySelector('header');
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          header.style.backgroundColor = 'black';
        } else {
          header.style.backgroundColor = 'rgba(0,0,0,0.8)';
        }
      });
    });


  document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      questionBtn.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });
  });

  const form = document.querySelector('.newsletter-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    const consent = document.getElementById('consent').checked;

    if (!consent) {
      alert("Please agree to receive communications before subscribing.");
      return;
    }

    // Simulate submission
    alert(`Thanks for subscribing with: ${email}`);
    form.reset();
  });