const timer = document.querySelector('[data-testid="test-user-current-time"]');
Date.now();
setInterval(() => {
  timer.textContent = ` Current Time(ms): ${Date.now()}`;
}, 1000);
