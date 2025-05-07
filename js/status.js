document.addEventListener('DOMContentLoaded', () => {
    const studentBtn = document.getElementById('student');
    const teacherBtn = document.getElementById('teacher');
    const chooseBtn = document.querySelector('.status_choose button');
  
    let selectedRole = null;
  
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
        localStorage.setItem('user_role', selectedRole);
        alert(`You selected: ${selectedRole}`);
      } else {
        alert('Please select a role before continuing.');
      }
    });
  });
  