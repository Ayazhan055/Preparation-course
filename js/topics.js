document.addEventListener('DOMContentLoaded', () => {
  const topicsContainer = document.querySelector('.topics_btns');
  const subject = localStorage.getItem('selected_subject');

  if (!subject || !topicsData[subject]) {
    topicsContainer.innerHTML = '<p>Топики не найдены для выбранного предмета.</p>';
    return;
  }

  topicsContainer.innerHTML = ''; 

  topicsData[subject].forEach(topic => {
    const div = document.createElement('div');
    div.className = 'topics_btn';

    const button = document.createElement('button');
    button.textContent = topic.title;

    const img = document.createElement("img");
    img.classList = "topic_img";
    img.src = "assets/right.png";
    button.appendChild(img);

    const sub_topic = document.createElement("ul");
    sub_topic.classList = "sub_topic";
    sub_topic.style.display = "none";

    let hideTimeout;

    button.addEventListener('mouseenter', () => {
      sub_topic.innerHTML = '';
      topic.sub_topics.forEach(sub => {
        const li = document.createElement('li');
        li.textContent = sub;
        sub_topic.appendChild(li);
      });
      clearTimeout(hideTimeout);
      sub_topic.style.display = 'block';
    });

    button.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        sub_topic.style.display = 'none';
      }, 200);
    });

    sub_topic.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
      sub_topic.style.display = 'block';
    });

    sub_topic.addEventListener('mouseleave', () => {
      sub_topic.style.display = 'none';
    });

    div.appendChild(button);
    div.appendChild(sub_topic);
    topicsContainer.appendChild(div);
  });
});
