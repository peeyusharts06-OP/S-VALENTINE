const heartBackground = document.getElementById('heartBackground');
const buttonStage = document.getElementById('buttonStage');
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const littleNote = document.getElementById('littleNote');
const celebration = document.getElementById('celebration');

// Make floating hearts once, then let CSS animate them forever.
const heartEmojis = ['💗', '💖', '💘', '💕', '💞', '❤️', '🩷'];
for (let i = 0; i < 24; i += 1) {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${18 + Math.random() * 27}px`;
  heart.style.setProperty('--duration', `${8 + Math.random() * 10}s`);
  heart.style.setProperty('--delay', `${-Math.random() * 16}s`);
  heart.style.setProperty('--drift', `${-70 + Math.random() * 140}px`);
  heartBackground.appendChild(heart);
}

// The NO button escapes the pointer/finger and also blocks click activation.
function moveNoButton() {
  const stageRect = buttonStage.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();
  const yesRect = yesButton.getBoundingClientRect();
  const maxX = Math.max(0, stageRect.width - buttonRect.width);
  const maxY = Math.max(0, stageRect.height - buttonRect.height);
  const yesCenterX = yesRect.left + yesRect.width / 2 - stageRect.left;
  const yesCenterY = yesRect.top + yesRect.height / 2 - stageRect.top;
  let chosenX = 0;
  let chosenY = 0;

  // Try several spots, preferably far from YES so the buttons don't overlap.
  for (let attempt = 0; attempt < 35; attempt += 1) {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    const centerX = x + buttonRect.width / 2;
    const centerY = y + buttonRect.height / 2;
    const distance = Math.hypot(centerX - yesCenterX, centerY - yesCenterY);
    chosenX = x;
    chosenY = y;
    if (distance > (buttonRect.width + yesRect.width) / 2 + 20) break;
  }

  noButton.classList.add('is-escaping');
  noButton.style.left = `${chosenX}px`;
  noButton.style.top = `${chosenY}px`;
  noButton.style.transform = 'none';
  littleNote.textContent = 'Hehe… the NO button says nope too 😜';
}

noButton.addEventListener('pointerenter', moveNoButton);
noButton.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  moveNoButton();
});
noButton.addEventListener('touchstart', (event) => {
  event.preventDefault();
  moveNoButton();
}, { passive: false });
noButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  moveNoButton();
});
noButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    moveNoButton();
  }
});

// A YES reveals the celebration, dancing GIF, and graffiti words.
yesButton.addEventListener('click', () => {
  document.body.classList.add('celebrating');
  celebration.hidden = false;
  littleNote.textContent = '';
  yesButton.setAttribute('aria-pressed', 'true');
  celebration.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Keep the escaping button inside its play area after rotating/resizing a device.
window.addEventListener('resize', () => {
  if (noButton.classList.contains('is-escaping')) moveNoButton();
});
