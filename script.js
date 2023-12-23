// делаем get запрос на сервер для получения постов
fetch('https://jsonplaceholder.typicode.com/posts')
   .then((res) => res.json())
   .then((posts) => {
      const container = document.querySelector(".container");
      posts.forEach((post) => {
         const element = createPostElement(post);
         appendElementToContainer(container, element);
      });
   })


// Функция, которая принимает объект поста и возвращает строку HTML-разметки
function createPostElement(post) {
   return `
      <div class="post">
      <h2>Заголовок: ${post.title}</h2>
      <p>Статья: ${post.body}</p>
      </div>
   `;
}

// Функция, которая добавляет разметку в контейнер
function appendElementToContainer(container, element) {
   container.innerHTML += element;
}
