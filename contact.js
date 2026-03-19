const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('cfSubmit');
const successMsg = document.getElementById('cfSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<svg viewBox="0 0 20 20" fill="none" style="width:17px;height:17px;animation:spin 1s linear infinite"><path d="M10 3a7 7 0 1 0 7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg> Gönderiliyor...`;

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.reset();
      submitBtn.style.display = 'none';
      successMsg.style.display = 'flex';
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      throw new Error('server error');
    }
  } catch {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<svg viewBox="0 0 20 20" fill="none" style="width:17px;height:17px;"><path d="M3 10l14 0M13 6l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Mesajı Gönder`;
    alert('Bir hata oluştu. Lütfen doğrudan e-posta gönderin.');
  }
});

const style = document.createElement('style');
style.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(style);
