const form = document.getElementById('quizForm');
const result = document.getElementById('result');
const finalMessage = document.getElementById('finalMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.classList.add('hidden');
  result.classList.remove('hidden');
});

function jawab(answer) {
  result.classList.add('hidden');
  finalMessage.classList.remove('hidden');

  if (answer.toLowerCase() === 'tidak mau') {
    finalMessage.innerHTML = `
      <h2>😔 Yahh...</h2>
      <p>Gak apa-apa kok, aku tetap seneng bisa kenal kamu. ❤️</p>
      <p>Semoga kamu bahagia ya, apapun pilihanmu.</p>
    `;
    createTears(); // Tambah animasi air mata
  } else {
    finalMessage.innerHTML = `
      <h2>🎉 Yeayyy!! 🎉</h2>
      <p>Kamu jawab "<strong>${answer}</strong>" ❤️</p>
      <p>Yuk kirim pesan ini ke aku~</p>
    `;
    createLoves(); // Tambah animasi love

    const message = encodeURIComponent(`Aku jawab ${answer} jadi pacarmu! ❤️`);
    const whatsappNumber = '6285724815845'; 
    const useWhatsApp = true;

    setTimeout(() => {
      if (useWhatsApp) {
        window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
      } else {
        window.location.href = `https://line.me/R/msg/text/?${message}`;
      }
    }, 2000);
  }
}

// Fungsi buat love animation
function createLoves() {
  for (let i = 0; i < 30; i++) {
    const love = document.createElement('div');
    love.classList.add('love');
    love.innerText = '💖';
    love.style.left = Math.random() * 100 + 'vw';
    love.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(love);

    setTimeout(() => {
      love.remove();
    }, 5000);
  }
}

// Fungsi buat air mata animation
function createTears() {
  for (let i = 0; i < 30; i++) {
    const tear = document.createElement('div');
    tear.classList.add('tear');
    tear.innerText = '💧';
    tear.style.left = Math.random() * 100 + 'vw';
    tear.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(tear);

    setTimeout(() => {
      tear.remove();
    }, 5000);
  }
}
