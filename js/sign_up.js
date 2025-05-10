document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signUpBtn = document.getElementById('sign_up_btn');
    const emailError = document.getElementById('email_warning');
    const passwordError = document.getElementById('password_warning');
    let emailChecked = false;
    let passChecked = false;
  
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  
    // Валидация email
    emailInput.addEventListener('input', () => {
      const email = emailInput.value.trim();
      if (!/\S+@\S+\.\S+/.test(email) && email.length > 0) {
        emailError.textContent = 'Введите корректный email';
        emailChecked = false;
      } else {
        emailError.textContent = '';
        emailChecked = email.length !== 0;
      }
    });
  
    // Валидация пароля
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value.trim();
      if (password.length < 6 && password.length > 0) {
        passwordError.textContent = 'Пароль должен содержать минимум 6 символов';
        passChecked = false;
      } else {
        passwordError.textContent = '';
        passChecked = password.length !== 0;
      }
    });
  
    // Обработка нажатия кнопки регистрации
    signUpBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Проверка полей
      emailChecked = /\S+@\S+\.\S+/.test(email);
      passChecked = password.length >= 6;
  
      if (!emailChecked || !passChecked) {
        alert("Пожалуйста, введите корректные данные");
        return;
      }
  
      const isEmailExist = accounts.some(account => account.email === email);
      if (isEmailExist) {
        alert("Этот email уже зарегистрирован");
      } else {
        const newAccount = { email, password };
        localStorage.setItem('sign_up_account', JSON.stringify(newAccount));
        alert("Вы успешно зарегистрировались!");
  
        // Можно перенаправить пользователя сразу на логин:
        window.location.href = 'status.html';
      }
    });
  });
  