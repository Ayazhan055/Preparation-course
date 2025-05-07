document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login_btn');
    const remember_meCheckbox = document.getElementById('remember_me');
    const emailError = document.getElementById('email_warning');
    const passwordError = document.getElementById('password_warning');

    const saved = localStorage.getItem('remember_me');
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    if (saved) {
    const data = JSON.parse(saved); // превращаем строку обратно в объект
    emailInput.value = data.email || '';
    passwordInput.value = data.password || '';
    }


    emailInput.addEventListener('input', () => {
      const email = emailInput.value.trim();
      if (!/\S+@\S+\.\S+/.test(email) && email.length > 0) {
        emailError.textContent = 'Введите корректный email';
      } else {
        emailError.textContent = '';
      }
    }
    );
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value.trim();
      if (password.length < 6  && password.length > 0) {
        passwordError.textContent = 'Пароль должен содержать минимум 6 символов';
      } else {
        passwordError.textContent = '';
      }
    }
    );





    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      const checkPassword = accounts.some(account => account.email === email && account.password === password);
        if (checkPassword) {
            alert("Вы успешно вошли в систему");
            window.location.href = 'index.html';
            localStorage.setItem("is_auth", "true");
        } else {
            alert("Неверный email или пароль");
        }
      
    });


    remember_meCheckbox.addEventListener('change', () => {
      if (remember_meCheckbox.checked) {
        localStorage.setItem('remember_me', JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
          }));      
        } else {
        localStorage.removeItem('remember_me');
      }
    });
  });
  