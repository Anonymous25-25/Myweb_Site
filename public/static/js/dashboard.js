// Dashboard Page JavaScript with Chart.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded');
        return;
    }
    
    // Common chart options for dark theme
    const darkThemeOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#e4e6eb'
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: '#b0b3b8'
                },
                grid: {
                    color: 'rgba(42, 47, 74, 0.5)'
                }
            },
            x: {
                ticks: {
                    color: '#b0b3b8'
                },
                grid: {
                    color: 'rgba(42, 47, 74, 0.5)'
                }
            }
        }
    };
    
    // Threat Detection Chart (Line Chart)
    const threatChartEl = document.getElementById('threatChart');
    if (threatChartEl) {
        const threatCtx = threatChartEl.getContext('2d');
        new Chart(threatCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Threats Detected',
                    data: [420, 532, 489, 612, 574, 395, 492],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Threats Blocked',
                    data: [412, 527, 480, 605, 568, 389, 485],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                ...darkThemeOptions,
                plugins: {
                    ...darkThemeOptions.plugins,
                    title: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Vulnerability Severity Chart (Doughnut Chart)
    const severityChartEl = document.getElementById('severityChart');
    if (severityChartEl) {
        const severityCtx = severityChartEl.getContext('2d');
        new Chart(severityCtx, {
            type: 'doughnut',
            data: {
                labels: ['Critical', 'High', 'Medium', 'Low', 'Informational'],
                datasets: [{
                    data: [12, 18, 28, 20, 6],
                    backgroundColor: [
                        '#ef4444',
                        '#f59e0b',
                        '#f59e0b',
                        '#3b82f6',
                        '#6b7280'
                    ],
                    borderColor: '#1a1f3a',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e4e6eb',
                            padding: 15
                        }
                    }
                }
            }
        });
    }
    
    // Update theme colors when theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                // Reload charts with appropriate theme colors
                // In production, you'd update chart colors dynamically
            }
        });
    });
    
    observer.observe(document.body, {
        attributes: true
    });
});
