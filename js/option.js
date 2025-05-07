document.addEventListener('DOMContentLoaded', () => {
    const optionButtons = document.querySelectorAll('.status_btn button');
    const chooseBtn = document.querySelector('.status_choose button');
    let selectedOption = null;
  
    optionButtons.forEach(button => {
      button.addEventListener('click', () => {
        optionButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedOption = button.textContent.trim();
      });
    });
  
    chooseBtn.addEventListener('click', () => {
      if (selectedOption) {
        localStorage.setItem('selected_option', selectedOption);
        alert(`Вы выбрали: ${selectedOption}`);
      } else {
        alert('Пожалуйста, выберите опцию.');
      }
    });
  });
  