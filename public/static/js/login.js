// Login Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('loginMessage');
    
    // Password visibility toggle
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            const icon = passwordToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            }
        });
    }
    
    // Form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Show loading state
            const submitButton = loginForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(function() {
                // Demo login (in production, this would be a real API call)
                if (email && password) {
                    loginMessage.textContent = 'Login successful! Redirecting...';
                    loginMessage.className = 'alert success';
                    loginMessage.style.display = 'block';
                    
                    // Redirect to dashboard after 1 second
                    setTimeout(function() {
                        window.location.href = '/static/pages/dashboard.html';
                    }, 1000);
                } else {
                    loginMessage.textContent = 'Please enter both email and password.';
                    loginMessage.className = 'alert error';
                    loginMessage.style.display = 'block';
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }
            }, 1500);
        });
    }
});
