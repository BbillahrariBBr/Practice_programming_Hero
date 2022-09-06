document.getElementById('btn-add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field').value;
    localStorage.setItem('name', nameField);
})