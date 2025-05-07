document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signUpBtn = document.getElementById('sign_up_btn');
    const emailError = document.getElementById('email_warning');
    const passwordError = document.getElementById('password_warning');

    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];


    emailInput.addEventListener('input', () => {
        const email = emailInput.value.trim();
        console.log(email);
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




    signUpBtn.addEventListener('click', (e) => {
      e.preventDefault();

  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      const value = {email, password};
      const isEmailExist = accounts.some(account => account.email === email);
      if(isEmailExist) {
        alert("Этот email уже зарегистрирован");
      }else{
        accounts.push(value);
        localStorage.setItem('accounts', JSON.stringify(accounts));
        alert("Вы успешно зарегистрировались");
      }
     
    });

  });
  