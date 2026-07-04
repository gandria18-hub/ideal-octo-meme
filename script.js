// ===========================
// INISIALISASI PARTIKEL
// ===========================

function createParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        container.appendChild(particle);
    }
}

// ===========================
// INISIALISASI HATI JATUH
// ===========================

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = '0s';
        heart.style.animationDuration = (Math.random() * 3 + 6) + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }, 800);
}

// ===========================
// KONTROL MUSIK
// ===========================

const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const musicStatus = document.getElementById('musicStatus');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.textContent = '🎵';
        musicBtn.classList.remove('playing');
        musicStatus.textContent = 'Putar musik';
        isPlaying = false;
    } else {
        bgMusic.play().catch(err => {
            console.log('Audio play error:', err);
            alert('Musik tidak dapat diputar. Pastikan browser memungkinkan autoplay.');
        });
        musicBtn.textContent = '⏸️';
        musicBtn.classList.add('playing');
        musicStatus.textContent = 'Jeda musik';
        isPlaying = true;
    }
});

// Auto play attempt (beberapa browser memblokir)
window.addEventListener('load', () => {
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                isPlaying = true;
                musicBtn.textContent = '⏸️';
                musicBtn.classList.add('playing');
                musicStatus.textContent = 'Jeda musik';
            })
            .catch(() => {
                // Autoplay blocked, user must click
                console.log('Autoplay blocked by browser');
            });
    }
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.section-fade');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// ===========================
// PARALLAX EFFECT
// ===========================

function handleParallax() {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('[class*="hero-background"]');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrollY * 0.5}px)`;
    });

    document.documentElement.style.setProperty('--scrollY', scrollY);
}

// ===========================
// SMOOTH SCROLL UNTUK LINK
// ===========================

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

// ===========================
// EVENT LISTENERS
// ===========================

window.addEventListener('scroll', () => {
    handleParallax();
});

window.addEventListener('load', () => {
    createParticles();
    createFloatingHearts();
    handleScrollAnimations();
    
    // Trigger animation untuk hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

// ===========================
// CURSOR TRACKING (OPTIONAL)
// ===========================

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const parallaxElements = document.querySelectorAll('.hero-background');
    parallaxElements.forEach(el => {
        el.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
    });
});

// ===========================
// RESPONSIVE CHECK
// ===========================

function checkResponsive() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}

window.addEventListener('resize', checkResponsive);
window.addEventListener('load', checkResponsive);

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});