// Portfolio Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-filter .filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Portfolio Modal Functions
function openPortfolioModal(projectId) {
    const modal = document.getElementById('portfolioModal');
    const modalBody = document.getElementById('modalBody');
    
    // Project details (in production, this would come from an API)
    const projects = {
        'project1': {
            title: 'Enterprise Network Penetration Test',
            description: 'Comprehensive security assessment of a Fortune 500 company\'s network infrastructure.',
            details: 'Conducted full-scope penetration testing including external and internal network assessments, wireless security testing, and social engineering campaigns. Identified 47 vulnerabilities ranging from critical to informational severity.',
            findings: [
                'Critical: Unauthenticated Remote Code Execution on web server',
                'High: SQL Injection in customer portal',
                'High: Weak password policies allowing brute force attacks',
                'Medium: Misconfigured firewall rules exposing internal services'
            ]
        }
        // Add more projects as needed
    };
    
    const project = projects[projectId];
    if (project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <h3>Project Details</h3>
            <p>${project.details}</p>
            <h3>Key Findings</h3>
            <ul>
                ${project.findings.map(finding => `<li>${finding}</li>`).join('')}
            </ul>
        `;
        modal.style.display = 'block';
    }
}

function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target === modal) {
        closePortfolioModal();
    }
});
