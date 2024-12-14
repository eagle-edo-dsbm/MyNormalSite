const dropdown = document.querySelector('.dropdown');
const dropdownMessage = document.querySelector('.dropdown-message');

dropdown.addEventListener('click', function(){
    alert(dropdownMessage.textContent);
});