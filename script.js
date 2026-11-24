
/* =================================
   MWICIRA HONORE - PORTFOLIO
   JavaScript
================================= */

// 1. Smooth scrolling for navigation links

const navigationLinks = document.querySelectorAll('.nav-links a');

navigationLinks.forEach(link => {
    link.addEventListener('click', function () {
        navigationLinks.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');
    });
});


// 2. Scroll reveal animation

const revealElements = document.querySelectorAll(
    'section:not(.home), .skill-card, .project-card'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});


// 3. Update footer year automatically

const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Mwicira Honore. All Rights Reserved.`;
}


// 4. Highlight active navigation while scrolling

const pageSections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
    let currentSection = '';

    pageSections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

/* =================================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-links');

if (menuToggle && navMenu) {

    menuToggle.addEventListener('click', () => {

        navMenu.classList.toggle('open');

        const isOpen = navMenu.classList.contains('open');

        menuToggle.textContent = isOpen ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', isOpen);

    });

    navigationLinks.forEach(link => {

        link.addEventListener('click', () => {

            navMenu.classList.remove('open');
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-expanded', 'false');

        });

    });
}


/* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById('contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Replace with your real email address
        const yourEmail = 'YOUR_EMAIL@gmail.com';

        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`;

        const mailtoLink =
            `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        document.getElementById('form-status').textContent =
            'Opening your email application...';

        window.location.href = mailtoLink;

    });
}
