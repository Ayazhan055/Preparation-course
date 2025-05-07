document.addEventListener('DOMContentLoaded', () => {
    const subjectButtons = document.querySelectorAll('.status_btn button');
    const chooseBtn = document.querySelector('.status_choose button');
    let selectedSubject = null;
  
    subjectButtons.forEach(button => {
      button.addEventListener('click', () => {
        subjectButtons.forEach(btn => btn.classList.remove('active')); // снять active у всех
        button.classList.add('active'); // добавить active на выбранный
        selectedSubject = button.textContent.trim(); // сохранить выбранный предмет
      });
    });
  
    chooseBtn.addEventListener('click', () => {
      if (selectedSubject) {
        localStorage.setItem('selected_subject', selectedSubject);
        alert(`Вы выбрали предмет: ${selectedSubject}`);
      } else {
        alert('Пожалуйста, выберите предмет.');
      }
    });
  });
  