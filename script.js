const emojis = ['🌸', '✨', '🎀', '💕', '⭐', '🌷', '💖'];

function createSparkle() {
  const el = document.createElement('div');
  el.className = 'sparkle';
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  el.style.left     = Math.random() * 100 + 'vw';
  el.style.bottom   = '-2rem';
  el.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';

  const dur = 6 + Math.random() * 8;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay   = (Math.random() * 4) + 's';

  document.body.appendChild(el);
  setTimeout(() => el.remove(), (dur + 4) * 1000);
}

// Arrancar con algunas partículas desde el inicio
for (let i = 0; i < 8; i++) {
  setTimeout(createSparkle, i * 300);
}

// Crear nuevas partículas periódicamente
setInterval(createSparkle, 700);
