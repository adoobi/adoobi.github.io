// Modal functionality for "Tentang Kami"
class AboutModal {
    constructor() {
        this.modal = document.getElementById('aboutModal');
        this.aboutBtn = document.getElementById('aboutBtn');
        this.footerAboutBtn = document.getElementById('footerAboutBtn');
        this.learnMoreBtn = document.getElementById('learnMoreBtn');
        this.closeBtn = document.getElementById('closeModalBtn');
        this.modalOverlay = document.querySelector('.modal-overlay');
        
        this.init();
    }
    
    init() {
        // Open modal from navbar button
        if (this.aboutBtn) {
            this.aboutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        }
        
        // Open modal from footer button
        if (this.footerAboutBtn) {
            this.footerAboutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        }
        
        // Open modal from "Pelajari Lebih Lanjut" button
        if (this.learnMoreBtn) {
            this.learnMoreBtn.addEventListener('click', () => {
                this.openModal();
            });
        }
        
        // Close modal with close button
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }
        
        // Close modal when clicking overlay
        if (this.modalOverlay) {
            this.modalOverlay.addEventListener('click', () => {
                this.closeModal();
            });
        }
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
        
        // Prevent modal content clicks from closing modal
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer) {
            modalContainer.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }
    
    openModal() {
        if (this.modal) {
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// Smooth scroll for anchor links
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Navbar scroll effect
class NavbarEffect {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            if (this.navbar) {
                if (window.scrollY > 50) {
                    this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    this.navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                } else {
                    this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    this.navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                }
            }
        });
    }
}

// Animate on scroll (simple implementation)
class ScrollAnimation {
    constructor() {
        this.elements = document.querySelectorAll('.feature-card, .step-item');
        this.init();
    }
    
    init() {
        // Set initial styles
        this.elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
        });
        
        this.checkVisibility();
        window.addEventListener('scroll', () => {
            this.checkVisibility();
        });
    }
    
    checkVisibility() {
        this.elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
}

// Add hover effects for cards
class CardEffects {
    constructor() {
        this.cards = document.querySelectorAll('.feature-card, .step-item');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
}

// Floating animation for hero elements
class FloatingAnimation {
    constructor() {
        this.floatingCards = document.querySelectorAll('.floating-card');
        this.heroIllustration = document.querySelector('.hero-illustration');
        this.init();
    }
    
    init() {
        // Add random animation delays if not already set
        this.floatingCards.forEach((card, index) => {
            if (!card.style.animationDelay) {
                const delay = index * 0.5;
                card.style.animationDelay = `${delay}s`;
            }
        });
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutModal();
    new SmoothScroll();
    new NavbarEffect();
    new ScrollAnimation();
    new CardEffects();
    new FloatingAnimation();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
});
