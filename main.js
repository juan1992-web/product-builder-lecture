document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggle');
  const body = document.body;

  // Load user's preference if available
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save current theme preference
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
