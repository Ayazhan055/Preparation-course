document.addEventListener('DOMContentLoaded', () => {
    const studentBtn = document.getElementById('student');
    const teacherBtn = document.getElementById('teacher');
    const chooseBtn = document.querySelector('.status_choose button');
  
    let selectedRole = null;
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const account = JSON.parse(localStorage.getItem('sign_up_account'));
    function activateButton(btn) {
      studentBtn.classList.remove('active');
      teacherBtn.classList.remove('active');
  
      btn.classList.add('active');
      selectedRole = btn.id; 
    }
  
    studentBtn.addEventListener('click', () => activateButton(studentBtn));
    teacherBtn.addEventListener('click', () => activateButton(teacherBtn));
  
    chooseBtn.addEventListener('click', () => {
      if (selectedRole) {
        const token = Date.now().toString();
        account.role = selectedRole;
        account.token = token;
        accounts.push(account);
        localStorage.setItem("active_token", token);
        localStorage.setItem('accounts', JSON.stringify(accounts));
        localStorage.setItem('is_auth', "true");
        localStorage.setItem('sign_up_account', "");
        window.location.href = 'index.html';
      } else {
        alert('Please select a role before continuing.');
      }
    });
  });
  