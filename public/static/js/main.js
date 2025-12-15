// ===================================
// CyberGuard - Main JavaScript File
// ===================================

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggles = document.querySelectorAll('#themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
        });
    }
    
    // Theme toggle event listeners
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            body.classList.toggle('light-theme');
            const isLightTheme = body.classList.contains('light-theme');
            
            // Update icon
            themeToggles.forEach(t => {
                const icon = t.querySelector('i');
                if (icon) {
                    if (isLightTheme) {
                        icon.classList.replace('fa-moon', 'fa-sun');
                    } else {
                        icon.classList.replace('fa-sun', 'fa-moon');
                    }
                }
            });
            
            // Save preference
            localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
        });
    });
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Dashboard Sidebar Toggle
    const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
    const dashboardSidebar = document.getElementById('dashboardSidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    if (mobileSidebarToggle && dashboardSidebar) {
        mobileSidebarToggle.addEventListener('click', function() {
            dashboardSidebar.classList.toggle('active');
        });
    }
    
    if (sidebarToggle && dashboardSidebar) {
        sidebarToggle.addEventListener('click', function() {
            dashboardSidebar.classList.remove('active');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
