document.addEventListener('DOMContentLoaded', ()=> {
    fetch('../html/header.html')
    .then(response => {
        if(!response.ok) throw new Error('Ошибка загрузки хедера!');
        return response.text();
    })
    .then(html => {
        document.body.insertAdjacentHTML('afterbegin', html);
    })
    .catch(error => console.error(error));
})