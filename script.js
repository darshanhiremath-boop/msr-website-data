// ===== Floor Data ===== 
const floorData = {
    ground: {
        standard: 'images/ground-floor-standard.jpg',
        upgrade: 'images/ground-floor-upgrade.jpg',
        rooms: [
            { name: 'Bedroom 1', standard: 'Botticino Classico Light Tiles', upgrade: 'Italian Botticino Marble' },
            { name: 'Kitchen', standard: 'Botticino Classico Light Tiles', upgrade: 'Italian Botticino Marble' }
        ]
    },
    first: {
        standard: 'images/first-floor-standard.jpg',
        upgrade: 'images/first-floor-upgrade.jpg',
        rooms: [
            { name: 'Bedroom 2', standard: 'Botticino Classico Light Tiles', upgrade: 'Italian Botticino Marble' },
            { name: 'Master Bedroom', standard: 'Laminated Wooden Flooring', upgrade: 'Italian Botticino Marble' },
            { name: 'Family Lounge', standard: 'Botticino Classico Light Tiles', upgrade: 'Italian Botticino Marble' }
        ]
    },
    second: {
        standard: 'images/second-floor-standard.jpg',
        upgrade: 'images/second-floor-upgrade.jpg',
        rooms: [
            { name: 'Bedroom 3', standard: 'Botticino Classico Light Tiles', upgrade: 'Italian Botticino Marble' },
            { name: 'Home Theatre', standard: 'Laminated Wooden Flooring', upgrade: 'Italian Botticino Marble' }
        ]
    }
};

// ===== Category Modal Content =====
const categoryContent = {
    space: {
        title: 'Space Customization Options',
        content: `
            <h3>Transform Your Villa Layout</h3>
            <div class="modal-section">
                <h4>Option 1: Gourmet Kitchen with Dry & Wet Zones</h4>
                <p>Designed for effortless cooking and elegant entertaining with separate zones for efficient workflow.</p>
            </div>
            <div class="modal-section">
                <h4>Option 2: Kitchen with Maid's Room & Private Toilet</h4>
                <p>Discreet utility blending comfort with convenience for household staff.</p>
            </div>
            <div class="modal-section">
                <h4>Option 3: Powder Room for Home Theatre / Private Office</h4>
                <p>A refined touch that completes your private retreat.</p>
            </div>
        `
    },
    marble: {
        title: 'Premium Marble Flooring Packages',
        content: `
            <h3>Elevate with Timeless Stone</h3>
            <div class="modal-section">
                <h4>Package 01: All-Room Marble Elegance - ₹14.75L</h4>
                <p>Seamless Italian marble throughout all floors (excluding home theatre)</p>
                <ul>
                    <li>Imported marble in all living spaces</li>
                    <li>Premium finishing and installation</li>
                    <li>Professional edge treatments</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Package 02: Selective Marble Upgrade - ₹5.0L</h4>
                <p>Master suite, family areas, and corridors elevated with enduring sophistication</p>
                <ul>
                    <li>Master bedroom & bathroom</li>
                    <li>First floor family lounge</li>
                    <li>Second floor lounge area</li>
                </ul>
            </div>
        `
    },
    bathroom: {
        title: 'Luxury Bathroom Upgrades',
        content: `
            <h3>World-Class Bathroom Luxury</h3>
            <div class="modal-section">
                <h4>Duravit Designer Collections</h4>
                <ul>
                    <li>Happy D2 Series: Bathtubs from ₹6.65L, Jacuzzis from ₹12.0L</li>
                    <li>Qatego Series: Bathtubs ₹6.65L, Jacuzzis ₹10.0L</li>
                    <li>Zencha Series: Premium bathtubs ₹7.60L, Semi-functional jacuzzis ₹10.65L</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Hansgrohe Premium Shower Systems</h4>
                <ul>
                    <li>Upgrade Option 01: Complete system with overhead, shoulder showers & thermostat - ₹7.50L</li>
                    <li>Upgrade Option 02: Premium shower set with advanced controls - ₹2.50L</li>
                </ul>
            </div>
        `
    },
    smarthome: {
        title: 'Smart Home Automation',
        content: `
            <h3>Intelligence That Inspires</h3>
            <div class="modal-section">
                <h4>Silver Package - ₹8.0L</h4>
                <ul>
                    <li>28 lighting circuits with on/off control</li>
                    <li>1 motorized curtain (living room)</li>
                    <li>Mobile app control</li>
                    <li>Enhanced security with 5 CCTV cameras</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Gold Package - ₹12.5L</h4>
                <ul>
                    <li>28 on/off + 64 dimmable (DALI) lights</li>
                    <li>3 motorized curtains</li>
                    <li>Energy monitoring dashboard</li>
                    <li>9 occupancy sensors</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Platinum Package - ₹17.0L</h4>
                <ul>
                    <li>42 on/off + 128 dimmable lights</li>
                    <li>7 motorized curtains</li>
                    <li>Complete home automation</li>
                    <li>LPG monitoring system</li>
                </ul>
            </div>
        `
    },
    vrf: {
        title: 'VRF Cooling System',
        content: `
            <h3>Effortless Comfort, Elevated Efficiency</h3>
            <div class="modal-section">
                <h4>Complete System - ₹13.5L</h4>
                <p>Why choose VRF over split ACs?</p>
                <ul>
                    <li>Save up to 50% on electricity bills</li>
                    <li>Individual room temperature control</li>
                    <li>Whisper-quiet operation</li>
                    <li>Single outdoor unit for cleaner aesthetics</li>
                    <li>Smart integration ready</li>
                    <li>Annual savings: ₹1.0-1.25L on energy costs</li>
                </ul>
                <p><em>Note: False ceiling work additional</em></p>
            </div>
        `
    },
    lift: {
        title: 'Lift Interior Refinement',
        content: `
            <h3>Sophisticated Detailing for Every Journey</h3>
            <div class="modal-section">
                <h4>Standard Package - ₹3.0L</h4>
                <ul>
                    <li>Push buttons</li>
                    <li>Solid door</li>
                    <li>Standard interior</li>
                    <li>Spot lighting</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Elite Package - ₹6.0L</h4>
                <ul>
                    <li>Touch buttons</li>
                    <li>Solid door with edge finish</li>
                    <li>Premium interior</li>
                    <li>Large ceiling light</li>
                    <li>Handrail</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4>Grandeur Package - ₹9.0L</h4>
                <ul>
                    <li>Touchless buttons</li>
                    <li>Half-glass door</li>
                    <li>Rose gold interior</li>
                    <li>Large ceiling light</li>
                    <li>Handrail</li>
                </ul>
            </div>
        `
    }
};

// ===== State Management =====
let currentFloor = 'ground';
let currentView = 'standard';

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initVisualizer();
    initCategoryCards();
    initScrollEffects();
    initContactForm();
});

// ===== Navigation =====
function initNavigation() {
    const nav = document.getElementById('topNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Visualizer =====
function initVisualizer() {
    // Floor tabs
    document.querySelectorAll('.floor-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.floor-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFloor = tab.dataset.floor;
            updateVisualizerDisplay();
        });
    });
    
    // View switch
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            updateVisualizerDisplay();
        });
    });
    
    // Initial display
    updateVisualizerDisplay();
}

function updateVisualizerDisplay() {
    const data = floorData[currentFloor];
    const img = document.getElementById('floor-plan-img');
    const title = document.getElementById('floor-title');
    const roomList = document.getElementById('room-list');
    
    // Update image
    img.src = data[currentView];
    
    // Update title
    const floorName = currentFloor.charAt(0).toUpperCase() + currentFloor.slice(1);
    const viewName = currentView === 'standard' ? 'Standard Configuration' : 'Premium Upgrade';
    title.textContent = `${floorName} Floor - ${viewName}`;
    
    // Update room list
    roomList.innerHTML = '';
    data.rooms.forEach(room => {
        const roomDiv = document.createElement('div');
        roomDiv.className = 'room-item';
        roomDiv.innerHTML = `
            <strong>${room.name}</strong>
            <span>${room[currentView]}</span>
        `;
        roomList.appendChild(roomDiv);
    });
}

// ===== Category Cards =====
function initCategoryCards() {
    const modal = document.getElementById('categoryModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = modal.querySelector('.modal-close');
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const content = categoryContent[category];
            
            if (content) {
                modalBody.innerHTML = `
                    <h2>${content.title}</h2>
                    ${content.content}
                `;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('categoryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== Scroll Effects =====
function initScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.category-card, .step-card, .package-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Contact Form =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In production, this would send to a server
        alert('Thank you for your interest! Our team will contact you shortly with detailed customization options and pricing.\n\nIn a production environment, this form would submit to your CRM or email system.');
        
        form.reset();
    });
}

// ===== Package Buttons =====
document.querySelectorAll('.package-item .btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const packageTitle = btn.closest('.package-item').querySelector('h3').textContent;
        alert(`Request quote for "${packageTitle}" package\n\nIn production, this would open a detailed quote form or contact modal.`);
    });
});

// ===== Utility Functions =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Export for potential use in other scripts
window.portalUtils = {
    scrollToSection,
    closeModal
};
