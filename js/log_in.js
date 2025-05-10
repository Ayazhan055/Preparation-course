document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login_btn');
    const remember_meCheckbox = document.getElementById('remember_me');
    const emailError = document.getElementById('email_warning');
    const passwordError = document.getElementById('password_warning');
    let emailChecked = false;
    let passChecked = false;
    const saved = localStorage.getItem('remember_me');
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    if (saved) {
    const data = JSON.parse(saved); 
    emailInput.value = data.email || '';
    passwordInput.value = data.password || '';
    }


    emailInput.addEventListener('input', () => {
      const email = emailInput.value.trim();
      if (!/\S+@\S+\.\S+/.test(email) && email.length > 0) {
        emailError.textContent = 'Введите корректный email';
        emailChecked = false;
      } else {
        emailError.textContent = '';
        if(email.length != 0){
            emailChecked = true;
        }else{
            emailChecked = false;
        }
      }
      
    }
    );
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value.trim();
      if (password.length < 6  && password.length > 0) {
        passwordError.textContent = 'Пароль должен содержать минимум 6 символов';
        passChecked = false;
      } else {
        passwordError.textContent = '';
        if(password.length != 0){
            passChecked = true;
        }else{
            passChecked = false;
        }
      }
    }
    );

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
      
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
      
        emailChecked = /\S+@\S+\.\S+/.test(email);
        passChecked = password.length >= 6;
      
        if (!emailChecked || !passChecked) {
          alert("Заполните поля корректно перед входом");
          return;
        }
      
        const checkPassword = accounts.find(account => account.email === email && account.password === password);
        
        if (checkPassword) {
          localStorage.setItem("is_auth", "true");
          localStorage.setItem("token", checkPassword.token);
          if (remember_meCheckbox.checked) {
            localStorage.setItem('remember_me', JSON.stringify({ email, password }));
          } else {
            localStorage.removeItem('remember_me');
          }
      
          window.location.href = 'index.html';
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
  