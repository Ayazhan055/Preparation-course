document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const resetBtn = document.getElementById('reset_btn');
    const result = document.getElementById('result');
    const emailWarning = document.getElementById('email_warning');
  
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  
    resetBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        emailWarning.textContent = 'Введите корректный email';
        result.textContent = '';
        result.classList.add('hide');
        return;
      }
  
      emailWarning.textContent = '';
  
      const user = accounts.find(acc => acc.email === email);
  
      if (user) {
        result.textContent = `Ваш пароль: ${user.password}`;
        result.classList.remove('hide');
      } else {
        result.textContent = 'Такой email не зарегистрирован.';
        result.classList.remove('hide');
      }
    });
  });
  