// Course data
const courses = [
    {
        name: "Bank",
        description: "Prepare for prestigious positions in public sector banks like SBI, RBI, and IBPS. Our expert-led course covers reasoning, quantitative aptitude, English, and general awareness.",
        icon: "/images/RCB_logo.jpg"
    },
    {
        name: "SSC",
        description: "Prepare for Staff Selection Commission (SSC) exams with expert guidance and a proven strategy. Our comprehensive coaching covers all major SSC exams like CGL, CHSL, MTS, and more.",
        icon: "/images/RCB_logo.jpg"
    },
    {
        name: "Railway",
        description: "Prepare for Indian Railways exams with a focus on logical reasoning, mathematics, and general awareness. Ideal for candidates aiming for secure central government jobs with great benefits.",
        icon: "/images/RCB_logo.jpg"
    },
    {
        name: "RAS",
        description: "Get comprehensive coaching for RAS, the prestigious civil services exam of Rajasthan. We cover Prelims, Mains, and Interview stages with expert faculty and updated syllabus coverage.",
        icon: "/images/RCB_logo.jpg"
    },
    {
        name: "REET",
        description: "Crack REET with our dedicated teacher training program. Focused classes for both Level 1 (Primary) and Level 2 (Upper Primary) with emphasis on pedagogy and child development.",
        icon: "/images/RCB_logo.jpg"
    },
    {
        name: "1st Grade",
        description: "Target your dream teaching position in Rajasthan's schools. We provide complete preparation including subject knowledge, general studies, and teaching methods tailored to the latest syllabus.",
        icon: "/images/RCB_logo.jpg"
    },
    {
        name: "Rajasthan Police",
        description: "Join Rajasthan Police with confidence! We offer rigorous physical training guidance and smart preparation for written tests covering reasoning, law, and general awareness.",
        icon: "/images/RCB_logo.jpg"
    }
];

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) {
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        }
    });
});

// Render course cards
const courseGrid = document.querySelector('.courses-grid');
courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.innerHTML = `
        <img src="${course.icon}" alt="${course.name}" class="course-icon">
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <a href="#contact" class="cta-button">Learn More →</a>
    `;
    courseGrid.appendChild(courseCard);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (data.success) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.fade-in, .slide-in, .slide-up').forEach(el => {
    observer.observe(el);
});

// Testimonials carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

// Auto advance testimonials
setInterval(nextTestimonial, 5000);

// Initialize first testimonial
showTestimonial(0);

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});