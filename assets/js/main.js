// Main JS for Nutrição Saudável
(function() {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  applyTheme(savedTheme || (prefersDark.matches ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
      themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
    });
  }

  // Smooth scroll for internal links
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('a[href^="#"]')) {
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
})();
