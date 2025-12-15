// Gallery Page JavaScript with Lightbox
const galleryData = [
    { icon: 'fas fa-server', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', title: 'Server Infrastructure', description: 'Secure server architecture and deployment configurations for enterprise environments.' },
    { icon: 'fas fa-code', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', title: 'Code Analysis', description: 'Static and dynamic code analysis for identifying security vulnerabilities.' },
    { icon: 'fas fa-network-wired', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', title: 'Network Topology', description: 'Complex network architecture diagrams and security configurations.' },
    { icon: 'fas fa-terminal', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', title: 'Terminal Operations', description: 'Command-line tools and scripting for security automation.' },
    { icon: 'fas fa-shield-virus', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', title: 'Malware Analysis', description: 'Reverse engineering and behavioral analysis of malicious software.' },
    { icon: 'fas fa-lock', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', title: 'Encryption Systems', description: 'Cryptographic implementations and secure key management systems.' },
    { icon: 'fas fa-database', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', title: 'Database Security', description: 'Database hardening and secure data management practices.' },
    { icon: 'fas fa-chart-line', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', title: 'Security Analytics', description: 'Data analysis and visualization of security metrics and trends.' },
    { icon: 'fas fa-fingerprint', gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)', title: 'Biometric Systems', description: 'Advanced authentication systems using biometric technologies.' },
    { icon: 'fas fa-wifi', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', title: 'Wireless Security', description: 'Wi-Fi security assessments and wireless penetration testing.' },
    { icon: 'fas fa-user-secret', gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', title: 'Penetration Testing', description: 'Comprehensive security testing methodologies and exploitation techniques.' },
    { icon: 'fas fa-bug', gradient: 'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)', title: 'Bug Bounty', description: 'Vulnerability research and responsible disclosure programs.' }
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    updateLightboxContent();
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = galleryData.length - 1;
    } else if (currentImageIndex >= galleryData.length) {
        currentImageIndex = 0;
    }
    updateLightboxContent();
}

function updateLightboxContent() {
    const data = galleryData[currentImageIndex];
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    lightboxImage.style.background = data.gradient;
    lightboxImage.style.width = '600px';
    lightboxImage.style.height = '400px';
    lightboxImage.style.borderRadius = '1rem';
    lightboxImage.style.display = 'flex';
    lightboxImage.style.alignItems = 'center';
    lightboxImage.style.justifyContent = 'center';
    lightboxImage.innerHTML = `<i class="${data.icon}" style="font-size: 5rem; color: white;"></i>`;
    
    lightboxCaption.innerHTML = `
        <h3 style="margin-bottom: 0.5rem;">${data.title}</h3>
        <p style="color: #b0b3b8;">${data.description}</p>
    `;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});
