 // Найдем форму и кнопку
  const taskForm = document.querySelector('.tasks__control');
  const taskInput = document.querySelector('#task__input');
  const taskList = document.querySelector('#tasks__list');

  // Обработчик отправки формы
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // предотвращаем перезагрузку страницы
    addNewTask();
  });

  // Функция для добавления новой задачи
  function addNewTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // ничего не делаем, если поле пустое

    // Создаем элемент списка (LI)
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    // Внутри LI создаем два дочерних элемента: заголовок и иконку удаления
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;

    const taskRemoveBtn = document.createElement('a');
    taskRemoveBtn.href = '#'; // используем анкор, чтобы ссылка работала корректно
    taskRemoveBtn.classList.add('task__remove');
    taskRemoveBtn.innerHTML = '×'; // символ удаления (×)

    // добавляем слушателя на удаление задачи
    taskRemoveBtn.addEventListener('click', () => {
      taskList.removeChild(taskItem); // удаляем элемент из списка
    });

    // Собираем элементы вместе
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskRemoveBtn);

    // Добавляем задачу в список
    taskList.appendChild(taskItem);

    // Очищаем поле ввода
    taskInput.value = "";
  }