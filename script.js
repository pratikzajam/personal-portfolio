if (window.jQuery) {
  $(function () {
    $(window).on('scroll', function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }

      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });

    $(".scroll-up-btn").on('click', function () {
      $("html").animate({ scrollTop: 0 });
      $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").on('click', function () {
      $("html").css("scrollBehavior", "smooth");
    });

    $("nav.navbar > .max-width > .menu-btn").on('click', function () {
      $(".navbar .menu").toggleClass("active");
      $("nav.navbar > .max-width > .menu-btn i").toggleClass("active");
    });

    if (typeof $.fn.owlCarousel === 'function') {
      $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1, nav: false },
          600: { items: 2, nav: false },
          1000: { items: 3, nav: false },
        },
      });
    }

    if (window.Typed) {
      new Typed(".typing", { strings: ["Full-Stack Web Developer"], typeSpeed: 100, backSpeed: 60, loop: true });
      new Typed(".typing-2", { strings: ["Full-Stack Web Developer"], typeSpeed: 100, backSpeed: 60, loop: true });
    }
  });
}


   // Typing Animation
        const typed = new (function () {
            const texts = ["Full Stack Developer", "Web Developer", "React Developer", "Software Engineer"];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typingElement = document.querySelector('.typing');
            const typingElement2 = document.querySelector('.typing-2');

            function type() {
                const currentText = texts[textIndex];

                if (isDeleting) {
                    charIndex--;
                } else {
                    charIndex++;
                }

                const displayText = currentText.substring(0, charIndex);
                if (typingElement) typingElement.textContent = displayText;
                if (typingElement2) typingElement2.textContent = displayText;

                let typeSpeed = isDeleting ? 50 : 100;

                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 500;
                }

                setTimeout(type, typeSpeed);
            }

            type();
        })();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const scrollBtn = document.querySelector('.scroll-up-btn');

            if (window.scrollY > 20) {
                navbar.classList.add('sticky');
                scrollBtn.classList.add('show');
            } else {
                navbar.classList.remove('sticky');
                scrollBtn.classList.remove('show');
            }
        });

        // Mobile menu toggle (vanilla)
        const menuBtn = document.querySelector('nav.navbar > .max-width > .menu-btn');
        const menu = document.querySelector('nav.navbar .menu');
        const overlay = document.querySelector('.menu-overlay');

        function setMenuOpen(isOpen) {
            if (!menu || !menuBtn) return;
            menu.classList.toggle('active', isOpen);
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-xmark', isOpen);
                icon.classList.toggle('fa-bars', !isOpen);
            }
            if (overlay) overlay.classList.toggle('show', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }

        if (menuBtn && menu) {
            menuBtn.addEventListener('click', () => {
                const willOpen = !menu.classList.contains('active');
                setMenuOpen(willOpen);
            });
        }

        // Close the mobile menu when a nav link is tapped (keeps overlay tap disabled)
        document.querySelectorAll('nav.navbar .menu a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => setMenuOpen(false));
        });

        // Scroll to top
        document.querySelector('.scroll-up-btn').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Expose open/ download resume helpers
        window.openResume = function () {
            try {
                const url = new URL('images/Pratik_Zajam_Resume.pdf', document.baseURI).toString();
                const win = window.open(url, '_blank', 'noopener');
                if (!win) {
                    location.href = url;
                }
            } catch (e) {
                console.error(e);
                alert('Unable to open resume. Please try downloading instead.');
            }
            return false;
        };

        window.downloadResume = function () {
            const url = new URL('images/Pratik_Zajam_Resume.pdf', document.baseURI).toString();
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Pratik_Zajam_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return false;
        };

        // Dynamic footer year
        (function setFooterYear(){
            try {
                const el = document.getElementById('footer-year');
                if (el) el.textContent = new Date().getFullYear();
            } catch (_) {}
        })();


        // Contact form handling
        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Simulate form submission (you would replace this with actual form handling)
            setTimeout(() => {
                document.getElementById('form-message').style.display = 'block';
                this.reset();

                setTimeout(() => {
                    document.getElementById('form-message').style.display = 'none';
                }, 3000);
            }, 1000);
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections for animations
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });



// Resume

function downloadAndView() {
  const url = '/images/Pratik_Zajam_resume.pdf';
  window.open(url, '_blank'); // Opens the file in a new tab for viewing

  // Create a hidden link element for download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Pratik_Zajam_Resume';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


try {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyjj8eQRSGyZcKoGmijcf9DQ-mi4nR03pt_VBB5JOnJR0Ka85BplF5doqkXgn-r1as6/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('Ms');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => {
          if (msg) {
            msg.innerText = 'Message Sent Successfully';
            setTimeout(() => { msg.innerHTML = ''; }, 5000);
          }
          form.reset();
        })
        .catch(error => console.error('Error!', error.message));
    });
  }
} catch (e) {
  console.error(e);
}



