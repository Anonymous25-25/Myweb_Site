document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('simLoginForm');
  const logoutButton = document.getElementById('logoutSim');
  const dashboardShell = document.querySelector('.dashboard-shell');
  const note = loginForm ? loginForm.querySelector('.form-note') : null;

  if (loginForm && dashboardShell) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const operator = formData.get('operatorId')?.toString().trim() || 'Operator';
      const scope = formData.get('region')?.toString().toUpperCase() || 'GLOBAL';

      document.body.classList.add('dashboard-active');
      dashboardShell.setAttribute('data-state', 'active');

      if (note) {
        note.textContent = `${operator} authenticated. Access scope: ${scope}. Session token valid for 12 minutes.`;
        note.style.color = 'var(--success)';
      }

      loginForm.reset();
    });
  }

  if (logoutButton && dashboardShell) {
    logoutButton.addEventListener('click', () => {
      document.body.classList.remove('dashboard-active');
      dashboardShell.removeAttribute('data-state');
      if (note) {
        note.textContent = 'Demo mode: no credentials stored. All interactions are simulated.';
        note.style.color = 'var(--text-muted)';
      }
    });
  }

  const intelItems = document.querySelectorAll('.intel-feed li');
  if (intelItems.length) {
    let index = 0;
    setInterval(() => {
      intelItems.forEach((item, idx) => {
        item.classList.toggle('pulse', idx === index);
      });
      index = (index + 1) % intelItems.length;
    }, 4000);
  }
});
