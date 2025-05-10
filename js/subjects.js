document.addEventListener('DOMContentLoaded', () => {
    const chooseBtn = document.querySelector('.status_choose button');
    const buttons = document.querySelector('.buttons');
    buttons.innerHTML = ``;
    subjects.forEach(button => {
      buttons.innerHTML += `
        <div class="status_btn" id='${button.id}'>
          <button>${button.subject}</button>
        </div>
      `;
    });


    const subjectButtons = document.querySelectorAll('.status_btn button');


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
        window.location.href = 'topics.html'; 
      } else {
      }
    });
  });
  