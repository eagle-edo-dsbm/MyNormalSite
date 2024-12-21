const buyModal = document.querySelector('.buy');

buyModal.addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Спасибо за покупку!</h2>
            <p>Ваш заказ принят. Ожидайте доставки!</p>
            <button class="close-modal">Закрыть</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.querySelector('.close-modal').addEventListener('click', function() {
        modal.remove();
    });
});
